(ns musicmashup.artistcard
	(:use-macros
		[purnam.core :only [obj arr ! def.n]]
		[gyr.core :only [def.controller
		def.directive]])
	(:require [musicmashup.helpers :as h]
		[musicmashup.constants :as constants]
		[musicmashup.app :as app]
		[musicmashup.http :as http]))

(defn openArtist[a, $state $stateParams]
	(.go $state "artist"
		#js {
			:artistId (.-musicBrainzId a)
			:artist a
			}))

(defn hasArtist [artist]
  (some? artist))

(def.controller musicMashup.artistCardController [$scope $state $stateParams]
	(! $scope.openArtist #(openArtist % $state $stateParams))
 	(! $scope.hasArtist hasArtist))

(def.directive musicMashup.artistcard []
	(clj->js {
		:templateUrl "partials/artistCard.html"
		:restrict "E"
		:controller "artistCardController"
		:scope {
			:artist "="
		}
		:replace true
		}))
