(ns musicmashup.main
	(:use-macros
		[purnam.core :only [obj arr ! def.n]]
		[gyr.core :only [def.module def.controller
		def.value def.constant
		def.filter def.factory
		def.provider def.service
		def.directive def.config]])
	(:require [musicmashup.helpers :as h]
		[musicmashup.constants :as constants]
		[musicmashup.app :as app]
		[musicmashup.http :as http]
		))


(defn get-artist-info [$http id onSuccess]
	;(println "getting artist info for " id)
	(http/getRequest $http (str constants/musicBrainzArtistInfoBaseUrl id) onSuccess))

(defn get-band-art [$http url onSuccess]
	(http/getRequest $http url
		(fn [response]
			(onSuccess (h/find-nested response :small)))))

(defn get-band-art-on-id [$http id onSuccess]
	(get-band-art $http (str constants/bandArtBaseUrl id) onSuccess))

(defn get-music-brainz-data [$http artist onSuccess]
	(http/getRequest $http (str constants/musicBrainzBaseUrl artist)
		(fn [response]
			(onSuccess (:artists response)))))


(defn scrape-music-brainz [entry]
 ; (println "entry: " entry)
{
	:musicBrainzId (:id entry)
	:name (:sort-name entry)
	:disambiguation (:disambiguation entry)
	:area (:area entry)
	:country (:county entry)
	})

(defn search [$http $scope]
	(get-music-brainz-data $http $scope.artist (fn [data]
		(let [scraped (mapv
			#(scrape-music-brainz %)
			data)]
		(! $scope.artistData (clj->js scraped))))))


(def.controller musicMashup.mainController [$scope, $http, $sce]
	(! $scope.artist "Nirvana")
	(! $scope.search #(search $http $scope))
	(search $http $scope))

;	(get-band-art $http constants/nirvanaBandArt
;		(fn [bandArtUrl]
;			(! $scope.coverArt bandArtUrl)))
;	(get-wiki $http constants/nirvanaWiki
;		(fn [bandData]
;			(! $scope.title (:title bandData))
;			(! $scope.description  (fn [] ($sce.trustAsHtml (:description bandData)))))))
