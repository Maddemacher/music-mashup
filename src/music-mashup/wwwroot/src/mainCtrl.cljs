(ns musicmashup.main
	(:use-macros
		[purnam.core :only [!]]
		[gyr.core :only [def.controller]])
	(:require [musicmashup.helpers :as h]
		[musicmashup.constants :as constants]
		[musicmashup.app :as app]
		[musicmashup.http :as http]))


(defn get-artist-info [$http id onSuccess]
	(http/getRequest $http (str constants/musicBrainzArtistInfoBaseUrl id) onSuccess))

(defn get-music-brainz-data [$http artist onSuccess]
	(http/getRequest $http (str constants/musicBrainzBaseUrl artist)
		(fn [response]
			(onSuccess (:artists response)))))


(defn scrape-music-brainz [entry]
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
