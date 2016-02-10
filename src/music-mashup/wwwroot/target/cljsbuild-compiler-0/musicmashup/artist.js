// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.artist');
goog.require('cljs.core');
goog.require('musicmashup.constants');
goog.require('musicmashup.wiki');
goog.require('musicmashup.app');
goog.require('goog.string');
goog.require('musicmashup.albumArt');
goog.require('musicmashup.http');
goog.require('goog.string.format');
musicmashup.artist.artistWiki = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
musicmashup.artist.artistAlbums = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
musicmashup.artist.musicMashup_artistController = ["$scope","$stateParams","$http","$sce",(function ($scope,$stateParams,$http,$sce){
var o_SHARP__9694 = $scope;
(o_SHARP__9694["showWiki"] = false);


var o_SHARP__9695 = $scope;
(o_SHARP__9695["showAlbums"] = false);


cljs.core.add_watch.call(null,musicmashup.artist.artistWiki,new cljs.core.Keyword(null,"wikiWatcher","wikiWatcher",896646724),(function (key,atom,old_state,new_state){
var o_SHARP__9696 = $scope;
(o_SHARP__9696["showWiki"] = true);


var o_SHARP__9697 = $scope;
(o_SHARP__9697["wikiTitle"] = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new_state)));


var o_SHARP_ = $scope;
(o_SHARP_["wikiDescription"] = $sce.trustAsHtml(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new_state))));

return o_SHARP_;
}));

cljs.core.add_watch.call(null,musicmashup.artist.artistAlbums,new cljs.core.Keyword(null,"albumWatcher","albumWatcher",-1030345386),(function (key,atom,old_state,new_state){
cljs.core.println.call(null,"albums atom changed");

cljs.core.println.call(null,new_state);

var o_SHARP_ = $scope;
(o_SHARP_["showAlbums"] = true);

return o_SHARP_;
}));

if(cljs.core.some_QMARK_.call(null,$stateParams.artist)){
var o_SHARP__9698 = $scope;
(o_SHARP__9698["title"] = $stateParams.artist.name);


var musicBrainzId = $stateParams.artist.musicBrainzId;
return musicmashup.http.getRequest.call(null,$http,goog.string.format(musicmashup.constants.musicBrainzArtistInfoBaseUrl,musicBrainzId),((function (musicBrainzId){
return (function (p1__9693_SHARP_){
musicmashup.wiki.setup_wiki.call(null,$http,p1__9693_SHARP_,((function (musicBrainzId){
return (function (wiki){
return cljs.core.reset_BANG_.call(null,musicmashup.artist.artistWiki,wiki);
});})(musicBrainzId))
);

return musicmashup.albumArt.setup_album_art.call(null,p1__9693_SHARP_,cljs.core.deref.call(null,musicmashup.artist.artistAlbums),$http,((function (musicBrainzId){
return (function (updatedAlbums){
return cljs.core.reset_BANG_.call(null,musicmashup.artist.artistAlbums,updatedAlbums);
});})(musicBrainzId))
);
});})(musicBrainzId))
);
} else {
return null;
}
})];

angular.module("musicMashup").controller("artistController",musicmashup.artist.musicMashup_artistController);
musicmashup.artist.musicMashup_mashupartist = [(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/artist.html",new cljs.core.Keyword(null,"restrict","restrict",-1071101511),"E",new cljs.core.Keyword(null,"controller","controller",2013778659),"artistController"], null));
})];

angular.module("musicMashup").directive("mashupartist",musicmashup.artist.musicMashup_mashupartist);
