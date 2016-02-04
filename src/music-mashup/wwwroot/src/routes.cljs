(ns musicmashup.routes
	(:use-macros 
		[purnam.core :only [obj arr ! def.n]]
		[gyr.core :only [def.module def.controller 
		def.value def.constant 
		def.filter def.factory 
		def.provider def.service
		def.directive def.config]]))

(def.config musicMashup [$stateProvider, $urlRouterProvider]
	(.otherwise $urlRouterProvider "/start")
	(.state $stateProvider "start"  
		(clj->js {
			:url "/start"
			:templateUrl "partials/start.html"
			})
		)
	(.state $stateProvider "artist"
		(clj->js {
			:url "/artist/{artistId}"
			:templateUrl "partials/artist.html"
			:controller "artistController"
   			:params {
				:artist nil
				}}))
	)	