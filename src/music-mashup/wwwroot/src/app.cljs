(ns musicmashup.app
  (:use-macros 
		[purnam.core :only [obj arr ! def.n]]
		[gyr.core :only [def.module def.controller 
		def.value def.constant 
		def.filter def.factory 
		def.provider def.service
		def.directive def.config]]))

(enable-console-print!)

(def.module musicMashup ["ui.router"])