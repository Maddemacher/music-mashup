// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.http');
goog.require('cljs.core');
musicmashup.http.getRequest = (function musicmashup$http$getRequest($http,url,onSuccess){
return $http.get.call(null,url).success((function (result){
if(!((onSuccess == null))){
return onSuccess.call(null,cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
return null;
}
})).error((function (result){
return cljs.core.println.call(null,"Unable to retreive data for ",url," returned with result ",result);
}));
});
