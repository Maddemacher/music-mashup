// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicMaship.artist');
goog.require('cljs.core');
goog.require('musicmashup.helpers');
goog.require('musicMashup.constants');
musicMaship.artist.musicMashup_artistController = ["$scope","$http","$sce",(function ($scope,$http,$sce){
var o_SHARP_ = $scope;
(o_SHARP_["message"] = "This is the artist controller");

return o_SHARP_;
})];

angular.module("musicMashup").controller("artistController",musicMaship.artist.musicMashup_artistController);
musicMaship.artist.musicMashup_artist = [(function (){
return (function (scope,elem,attrs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/artist.html",new cljs.core.Keyword(null,"restrict","restrict",-1071101511),"E",new cljs.core.Keyword(null,"controller","controller",2013778659),musicMaship.artist.artistController], null);
});
})];

angular.module("musicMashup").directive("artist",musicMaship.artist.musicMashup_artist);
