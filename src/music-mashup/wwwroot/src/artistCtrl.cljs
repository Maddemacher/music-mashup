(ns musicmashup.artist
(:use-macros
	[purnam.core :only [!]]
	[gyr.core :only [def.controller def.directive]])
(:require
	[musicmashup.app :as app]
	[musicmashup.constants :as constants]
	[musicmashup.http :as http]
  [musicmashup.albumArt :as albumArt]
  [musicmashup.wiki :as wiki]
  [goog.string :as s]
 	[goog.string.format]))

(def artistWiki (atom {}))
(def artistAlbums (atom []))

(def.controller musicMashup.artistController [$scope $stateParams $http $sce]
 	(! $scope.showWiki false)
 	(! $scope.showAlbums false)

	(add-watch artistWiki :wikiWatcher
  	(fn [key atom old-state new-state]
      (! $scope.showWiki true)
      (! $scope.wikiTitle (clj->js (:title new-state)))
      (! $scope.wikiDescription (.trustAsHtml $sce (clj->js (:description new-state))))))

	(add-watch artistAlbums :albumWatcher
		(fn [key atom old-state new-state]
   		(println "albums atom changed")
   		(println new-state)
    	(! $scope.showAlbums true)))

	(if (some? (.-artist $stateParams))
		(do (! $scope.title (.-artist.name $stateParams))

   		(let [musicBrainzId (.-artist.musicBrainzId $stateParams)]
	   		(http/getRequest $http (s/format constants/musicBrainzArtistInfoBaseUrl	musicBrainzId)
					#(do (wiki/setup-wiki $http %
                           (fn [wiki] (reset! artistWiki wiki)))
       			 	 (albumArt/setup-album-art % @artistAlbums $http
                                       (fn [updatedAlbums] (reset! artistAlbums updatedAlbums)))
        ))
    ))))


(def.directive musicMashup.mashupartist []
	(clj->js {
		:templateUrl "partials/artist.html"
		:restrict "E"
		:controller "artistController"
		}))
