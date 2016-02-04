// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.artist');
goog.require('cljs.core');
goog.require('musicmashup.helpers');
goog.require('musicmashup.constants');
goog.require('musicmashup.app');
goog.require('musicmashup.http');
musicmashup.artist.get_wiki = (function musicmashup$artist$get_wiki($http,url,onSuccess){
return musicmashup.http.getRequest.call(null,$http,url,(function (response){
return onSuccess.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),musicmashup.helpers.find_nested.call(null,response,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"description","description",-1428560544),musicmashup.helpers.find_nested.call(null,response,new cljs.core.Keyword(null,"extract","extract",-1241084618))], null));
}));
});
musicmashup.artist.scrape_relation = (function musicmashup$artist$scrape_relation(rel){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rel),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(rel)], null);
});
musicmashup.artist.scrape_relations = (function musicmashup$artist$scrape_relations(relations){
return cljs.core.map.call(null,musicmashup.artist.scrape_relation,relations);
});
musicmashup.artist.setup_relational_data = (function musicmashup$artist$setup_relational_data(data){
return cljs.core.clj__GT_js.call(null,musicmashup.artist.scrape_relations.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)));
});
musicmashup.artist.get_relation_of_type = (function musicmashup$artist$get_relation_of_type(type,relations){
return cljs.core.some.call(null,(function (p1__8926_SHARP_){
if(cljs.core._EQ_.call(null,type,p1__8926_SHARP_.type)){
return p1__8926_SHARP_;
} else {
return null;
}
}),relations);
});
musicmashup.artist.evaluate_relations = (function musicmashup$artist$evaluate_relations(relations){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,musicmashup.artist.get_relation_of_type.call(null,"this relation shouldnt exist",relations)),musicmashup.artist.get_relation_of_type.call(null,musicmashup.constants.socialNetworkRelationTag,relations)),musicmashup.artist.get_relation_of_type.call(null,musicmashup.constants.wikiRelationTag,relations)));
});
musicmashup.artist.musicMashup_artistController = ["$scope","$stateParams","$http",(function ($scope,$stateParams,$http){
if(cljs.core.some_QMARK_.call(null,$stateParams.artist)){
var o_SHARP__8928 = $scope;
(o_SHARP__8928["title"] = $stateParams.artist.name);


musicmashup.http.getRequest.call(null,$http,[cljs.core.str(musicmashup.constants.musicBrainzArtistInfoBaseUrl),cljs.core.str($stateParams.artist.musicBrainzId),cljs.core.str("?"),cljs.core.str(musicmashup.constants.musicBrainzJsonTag),cljs.core.str(musicmashup.constants.musicBrainzReleaseGroupsTag)].join(''),(function (p1__8927_SHARP_){
return (function (){var o_SHARP_ = $scope;
(o_SHARP_["mb"] = cljs.core.clj__GT_js.call(null,p1__8927_SHARP_));

return o_SHARP_;
})().call(null,(function (){var o_SHARP_ = $scope;
(o_SHARP_["relationalData"] = musicmashup.artist.setup_relational_data.call(null,p1__8927_SHARP_));

return o_SHARP_;
})(),(function (){var o_SHARP_ = $scope;
(o_SHARP_["interestingRelations"] = cljs.core.clj__GT_js.call(null,musicmashup.artist.evaluate_relations.call(null,$scope.relationalData)));

return o_SHARP_;
})());
}));

var o_SHARP_ = $scope;
(o_SHARP_["artist"] = cljs.core.js__GT_clj.call(null,$stateParams.artist));

return o_SHARP_;
} else {
return null;
}
})];

angular.module("musicMashup").controller("artistController",musicmashup.artist.musicMashup_artistController);
musicmashup.artist.musicMashup_mashupartist = [(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/artist.html",new cljs.core.Keyword(null,"restrict","restrict",-1071101511),"E",new cljs.core.Keyword(null,"controller","controller",2013778659),"artistController"], null));
})];

angular.module("musicMashup").directive("mashupartist",musicmashup.artist.musicMashup_mashupartist);
