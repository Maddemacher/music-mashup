(ns musicmashup.artist
	(:use-macros 
		[purnam.core :only [obj arr ! def.n]]
		[gyr.core :only [def.controller def.directive]])
	(:require [musicmashup.helpers :as h]
		[musicmashup.constants :as constants]
		[musicmashup.app :as app]
		[musicmashup.http :as http]))


(defn get-wiki [$http url onSuccess]
	(http/getRequest $http url 
		(fn [response] 
			(onSuccess 
			{
				:title (h/find-nested response :title)
				:description (h/find-nested response :extract)
			}
			))))

(defn scrape-relation [rel]
{
	:type (:type rel)
	:url (:url rel)
	})

(defn scrape-relations [relations]
	(map scrape-relation relations))

(defn setup-relational-data [data]
	(->> (:relations data)
		(scrape-relations)
		(clj->js)))

(defn get-relation-of-type [type relations]
	(some #(if (= type (.-type %)) %) relations))

(defn evaluate-relations [relations]
	(remove nil? (list 
		(get-relation-of-type constants/wikiRelationTag relations)
		(get-relation-of-type constants/socialNetworkRelationTag relations)
		(get-relation-of-type "this relation shouldnt exist" relations))))

(def.controller musicMashup.artistController [$scope $stateParams $http]
	(if (some? (.-artist $stateParams))
		(do (! $scope.title (.-artist.name $stateParams))
			(http/getRequest $http 
				(str constants/musicBrainzArtistInfoBaseUrl 
					(.-artist.musicBrainzId $stateParams)
					"?" 
					constants/musicBrainzJsonTag
					constants/musicBrainzReleaseGroupsTag)
				#((! $scope.mb (clj->js %))
					(! $scope.relationalData (setup-relational-data %))
					(! $scope.interestingRelations (clj->js (evaluate-relations (.-relationalData $scope))))))
			(! $scope.artist (js->clj (.-artist $stateParams)))
			)))


(def.directive musicMashup.mashupartist []
	(clj->js {
		:templateUrl "partials/artist.html"
		:restrict "E"
		:controller "artistController"
		}))