// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.artist');
goog.require('cljs.core');
goog.require('musicmashup.helpers');
goog.require('musicmashup.constants');
goog.require('musicmashup.app');
goog.require('musicmashup.http');
goog.require('clojure.string');
musicmashup.artist.artistWiki = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
musicmashup.artist.artistSocialMedia = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
musicmashup.artist.get_resource_url = (function musicmashup$artist$get_resource_url(resource){
return new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(resource));
});
musicmashup.artist.get_wiki = (function musicmashup$artist$get_wiki($http,url){
var wikiUrl = [cljs.core.str(musicmashup.constants.wikiBaseUrl),cljs.core.str(cljs.core.last.call(null,clojure.string.split.call(null,url,"/")))].join('');
return musicmashup.http.jsonpRequest.call(null,$http,wikiUrl,((function (wikiUrl){
return (function (response){
return cljs.core.reset_BANG_.call(null,musicmashup.artist.artistWiki,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),musicmashup.helpers.find_nested.call(null,response,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"description","description",-1428560544),musicmashup.helpers.find_nested.call(null,response,new cljs.core.Keyword(null,"extract","extract",-1241084618))], null));
});})(wikiUrl))
);
});
musicmashup.artist.get_albums = (function musicmashup$artist$get_albums($http,url){
return null;
});
musicmashup.artist.setup_resource = (function musicmashup$artist$setup_resource(getter,relation,$http){
return getter.call(null,$http,musicmashup.artist.get_resource_url.call(null,relation));
});
musicmashup.artist.setup_social_network = (function musicmashup$artist$setup_social_network(relation,$http){
return cljs.core.reset_BANG_.call(null,musicmashup.artist.artistSocialMedia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Social"], null));
});
musicmashup.artist.scrape_relation = (function musicmashup$artist$scrape_relation(rel){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rel),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(rel)], null);
});
musicmashup.artist.scrape_relations = (function musicmashup$artist$scrape_relations(relations){
return cljs.core.map.call(null,musicmashup.artist.scrape_relation,relations);
});
musicmashup.artist.setup_relational_data = (function musicmashup$artist$setup_relational_data(data){
return musicmashup.artist.scrape_relations.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data));
});
musicmashup.artist.get_relation_of_type = (function musicmashup$artist$get_relation_of_type(type,relations){
return cljs.core.some.call(null,(function (p1__9836_SHARP_){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__9836_SHARP_))){
return p1__9836_SHARP_;
} else {
return null;
}
}),relations);
});
musicmashup.artist.evaluate_relations = (function musicmashup$artist$evaluate_relations(relations){
cljs.core.println.call(null,relations);

return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,musicmashup.artist.get_relation_of_type.call(null,musicmashup.constants.albumRelationRag,relations)),musicmashup.artist.get_relation_of_type.call(null,musicmashup.constants.socialNetworkRelationTag,relations)),musicmashup.artist.get_relation_of_type.call(null,musicmashup.constants.wikiRelationTag,relations)));
});
musicmashup.artist.setup_relation_of_type = (function musicmashup$artist$setup_relation_of_type(relation,$http){
var pred__9841 = (function (p1__9837_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(relation),p1__9837_SHARP_);
});
var expr__9842 = musicmashup.constants.wikiRelationTag;
if(cljs.core.truth_(pred__9841.call(null,musicmashup.artist.setup_resource.call(null,musicmashup.artist.get_wiki,relation,$http),expr__9842))){
return musicmashup.constants.albumRelationTag;
} else {
return musicmashup.artist.setup_resource.call(null,musicmashup.artist.get_albums,relation,$http);
}
});
musicmashup.artist.setup_relations = (function musicmashup$artist$setup_relations(relations,$http){
return cljs.core.mapv.call(null,(function (p1__9844_SHARP_){
return musicmashup.artist.setup_relation_of_type.call(null,p1__9844_SHARP_,$http);
}),relations);
});
musicmashup.artist.musicMashup_artistController = ["$scope","$stateParams","$http","$sce",(function ($scope,$stateParams,$http,$sce){
var o_SHARP__9846 = $scope;
(o_SHARP__9846["showWiki"] = false);


var o_SHARP__9847 = $scope;
(o_SHARP__9847["showAlbums"] = false);


cljs.core.add_watch.call(null,musicmashup.artist.artistWiki,new cljs.core.Keyword(null,"wikiWatcher","wikiWatcher",896646724),(function (key,atom,old_state,new_state){
var o_SHARP__9848 = $scope;
(o_SHARP__9848["showWiki"] = true);


var o_SHARP__9849 = $scope;
(o_SHARP__9849["wikiTitle"] = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new_state)));


var o_SHARP_ = $scope;
(o_SHARP_["wikiDescription"] = $sce.trustAsHtml(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new_state))));

return o_SHARP_;
}));

cljs.core.add_watch.call(null,musicmashup.artist.artistSocialMedia,new cljs.core.Keyword(null,"socialMediaWatcher","socialMediaWatcher",-511471662),(function (key,atom,old_state,new_state){
var o_SHARP_ = $scope;
(o_SHARP_["showAlbums"] = true);

return o_SHARP_;
}));

if(cljs.core.some_QMARK_.call(null,$stateParams.artist)){
var o_SHARP__9850 = $scope;
(o_SHARP__9850["title"] = $stateParams.artist.name);


return musicmashup.http.getRequest.call(null,$http,[cljs.core.str(musicmashup.constants.musicBrainzArtistInfoBaseUrl),cljs.core.str($stateParams.artist.musicBrainzId),cljs.core.str("?"),cljs.core.str(musicmashup.constants.musicBrainzJsonTag),cljs.core.str(musicmashup.constants.musicBrainzReleaseGroupsTag)].join(''),(function (p1__9845_SHARP_){
return musicmashup.artist.setup_relations.call(null,musicmashup.artist.evaluate_relations.call(null,musicmashup.artist.setup_relational_data.call(null,p1__9845_SHARP_)),$http);
}));
} else {
return null;
}
})];

angular.module("musicMashup").controller("artistController",musicmashup.artist.musicMashup_artistController);
musicmashup.artist.musicMashup_mashupartist = [(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"templateUrl","templateUrl",-1286973417),"partials/artist.html",new cljs.core.Keyword(null,"restrict","restrict",-1071101511),"E",new cljs.core.Keyword(null,"controller","controller",2013778659),"artistController"], null));
})];

angular.module("musicMashup").directive("mashupartist",musicmashup.artist.musicMashup_mashupartist);
