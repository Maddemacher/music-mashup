// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.routes');
goog.require('cljs.core');
angular.module("musicMashup").config(["$stateProvider","$urlRouterProvider",(function ($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise("/start");

$stateProvider.state("start",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/start",new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/start.html"], null)));

return $stateProvider.state("artist",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),"/artist/{artistId}",new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/artist.html",new cljs.core.Keyword(null,"controller","controller",2013778659),"artistController",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artist","artist",152869709),null], null)], null)));
})]);
