// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.artistcard');
goog.require('cljs.core');
goog.require('musicmashup.helpers');
goog.require('musicmashup.constants');
goog.require('musicmashup.app');
goog.require('musicmashup.http');
musicmashup.artistcard.openArtist = (function musicmashup$artistcard$openArtist(a,$state,$stateParams){
return $state.go("artist",{"artistId": a.musicBrainzId, "artist": a});
});
musicmashup.artistcard.hasArtist = (function musicmashup$artistcard$hasArtist(artist){
return cljs.core.some_QMARK_.call(null,artist);
});
musicmashup.artistcard.musicMashup_artistCardController = ["$scope","$state","$stateParams",(function ($scope,$state,$stateParams){
var o_SHARP__9816 = $scope;
(o_SHARP__9816["openArtist"] = ((function (o_SHARP__9816){
return (function (p1__9815_SHARP_){
return musicmashup.artistcard.openArtist.call(null,p1__9815_SHARP_,$state,$stateParams);
});})(o_SHARP__9816))
);


var o_SHARP_ = $scope;
(o_SHARP_["hasArtist"] = musicmashup.artistcard.hasArtist);

return o_SHARP_;
})];

angular.module("musicMashup").controller("artistCardController",musicmashup.artistcard.musicMashup_artistCardController);
musicmashup.artistcard.musicMashup_artistcard = [(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/artistCard.html",new cljs.core.Keyword(null,"restrict","restrict",-1071101511),"E",new cljs.core.Keyword(null,"controller","controller",2013778659),"artistCardController",new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artist","artist",152869709),"="], null),new cljs.core.Keyword(null,"replace","replace",-786587770),true], null));
})];

angular.module("musicMashup").directive("artistcard",musicmashup.artistcard.musicMashup_artistcard);
