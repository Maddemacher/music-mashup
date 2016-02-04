// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.main');
goog.require('cljs.core');
goog.require('musicmashup.helpers');
goog.require('musicmashup.constants');
goog.require('musicmashup.app');
goog.require('musicmashup.http');
musicmashup.main.get_artist_info = (function musicmashup$main$get_artist_info($http,id,onSuccess){
return musicmashup.http.getRequest.call(null,$http,[cljs.core.str(musicmashup.constants.musicBrainzArtistInfoBaseUrl),cljs.core.str(id),cljs.core.str("?"),cljs.core.str(musicmashup.constants.musicBrainzJsonTag),cljs.core.str(musicmashup.constants.musicBrainzReleaseGroupsTag)].join(''),onSuccess);
});
musicmashup.main.get_band_art = (function musicmashup$main$get_band_art($http,url,onSuccess){
return musicmashup.http.getRequest.call(null,$http,url,(function (response){
return onSuccess.call(null,musicmashup.helpers.find_nested.call(null,response,new cljs.core.Keyword(null,"small","small",2133478704)));
}));
});
musicmashup.main.get_band_art_on_id = (function musicmashup$main$get_band_art_on_id($http,id,onSuccess){
return musicmashup.main.get_band_art.call(null,$http,[cljs.core.str(musicmashup.constants.bandArtBaseUrl),cljs.core.str(id)].join(''),onSuccess);
});
musicmashup.main.get_music_brainz_data = (function musicmashup$main$get_music_brainz_data($http,artist,onSuccess){
return musicmashup.http.getRequest.call(null,$http,[cljs.core.str(musicmashup.constants.musicBrainzBaseUrl),cljs.core.str(artist),cljs.core.str(musicmashup.constants.musicBrainzJsonTag)].join(''),(function (response){
return onSuccess.call(null,new cljs.core.Keyword(null,"artists","artists",86504217).cljs$core$IFn$_invoke$arity$1(response));
}));
});
musicmashup.main.scrape_music_brainz = (function musicmashup$main$scrape_music_brainz(entry){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"musicBrainzId","musicBrainzId",469970542),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sort-name","sort-name",1156393255).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"disambiguation","disambiguation",-1002690414),new cljs.core.Keyword(null,"disambiguation","disambiguation",-1002690414).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"area","area",472007256).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(entry)], null);
});
musicmashup.main.search = (function musicmashup$main$search($http,$scope){
return musicmashup.main.get_music_brainz_data.call(null,$http,$scope.artist,(function (data){
var scraped = cljs.core.mapv.call(null,(function (p1__8766_SHARP_){
return musicmashup.main.scrape_music_brainz.call(null,p1__8766_SHARP_);
}),data);
var o_SHARP_ = $scope;
(o_SHARP_["artistData"] = cljs.core.clj__GT_js.call(null,scraped));

return o_SHARP_;
}));
});
musicmashup.main.musicMashup_mainController = ["$scope","$http","$sce",(function ($scope,$http,$sce){
var o_SHARP__8767 = $scope;
(o_SHARP__8767["artist"] = "Nirvana");


var o_SHARP__8768 = $scope;
(o_SHARP__8768["search"] = ((function (o_SHARP__8768){
return (function (){
return musicmashup.main.search.call(null,$http,$scope);
});})(o_SHARP__8768))
);


return musicmashup.main.search.call(null,$http,$scope);
})];

angular.module("musicMashup").controller("mainController",musicmashup.main.musicMashup_mainController);
