(ns musicmashup.artist
(:use-macros
	[purnam.core :only [obj arr ! def.n]]
	[gyr.core :only [def.controller def.directive]])
(:require [musicmashup.helpers :as h]
	[musicmashup.constants :as constants]
	[musicmashup.app :as app]
	[musicmashup.http :as http]
	[clojure.string :as s]))

(def artistWiki (atom {}))
(def artistSocialMedia (atom {}))

(defn get-resource-url [resource]
	(-> resource
		(:url)
		(:resource)))

(defn get-wiki [$http url]
 	(let [wikiUrl (str constants/wikiBaseUrl (last (s/split url "/")))]
  	(http/jsonpRequest $http wikiUrl
			(fn [response] (reset! artistWiki {
																					:title (h/find-nested response :title)
																					:description (h/find-nested response :extract)
																					})))))

(defn get-albums [$http url])

(defn setup-resource [getter relation $http]
	(getter $http (get-resource-url relation)))

(defn setup-social-network [relation $http]
	(reset! artistSocialMedia {
															:title "Social"
														}))

(defn scrape-relation [rel] {
															:type (:type rel)
															:url (:url rel)
														})

(defn scrape-relations [relations]
	(map scrape-relation relations))

(defn setup-relational-data [data]
	(->>
		(:relations data)
		(scrape-relations)))

(defn get-relation-of-type [type relations]
				(some #(if (= type (:type %)) %) relations))

(defn evaluate-relations [relations]
 (println relations)
	(remove nil? (list
		(get-relation-of-type constants/wikiRelationTag relations)
		(get-relation-of-type constants/socialNetworkRelationTag relations)
  	(get-relation-of-type constants/albumRelationRag relations))))

(defn setup-relation-of-type [relation $http]
	(condp  #(= (:type relation) %)
		constants/wikiRelationTag (setup-resource get-wiki relation $http)
		constants/albumRelationTag (setup-resource get-albums relation $http)
	;	constants/socialNetworkRelationTag (setup-resource get-social-network relation $http)
   ))

(defn setup-relations [relations $http]
		(mapv #(setup-relation-of-type % $http) relations))

(def.controller musicMashup.artistController [$scope $stateParams $http $sce]
 	(! $scope.showWiki false)
 	(! $scope.showAlbums false)

	(add-watch artistWiki :wikiWatcher
  	(fn [key atom old-state new-state]
      (! $scope.showWiki true)
      (! $scope.wikiTitle (clj->js (:title new-state)))
      (! $scope.wikiDescription (.trustAsHtml $sce (clj->js (:description new-state))))))

	(add-watch artistSocialMedia :socialMediaWatcher
		(fn [key atom old-state new-state]
    	(! $scope.showAlbums true)))

	(if (some? (.-artist $stateParams))
		(do (! $scope.title (.-artist.name $stateParams))
			(http/getRequest $http
				(str constants/musicBrainzArtistInfoBaseUrl
					(.-artist.musicBrainzId $stateParams)
					"?"
					constants/musicBrainzJsonTag
					constants/musicBrainzReleaseGroupsTag)
				#(do (->	(setup-relational-data %)
              		(evaluate-relations)
              		(setup-relations $http)))))))


(def.directive musicMashup.mashupartist []
	(clj->js {
		:templateUrl "partials/artist.html"
		:restrict "E"
		:controller "artistController"
		}))
