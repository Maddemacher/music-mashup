// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.http');
goog.require('cljs.core');
musicmashup.http.send_get_request = (function musicmashup$http$send_get_request(httpMethod,url,onSuccess){
return httpMethod.call(null,url).success((function (result){
if(!((onSuccess == null))){
return onSuccess.call(null,cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
return null;
}
})).error((function (result){
return cljs.core.println.call(null,"Unable to retreive data for ",url," returned with result ",result);
}));
});
musicmashup.http.jsonpRequest = (function musicmashup$http$jsonpRequest($http,url,onSuccess){
return musicmashup.http.send_get_request.call(null,$http.jsonp,url,onSuccess);
});
musicmashup.http.getRequest = (function musicmashup$http$getRequest($http,url,onSuccess){
return musicmashup.http.send_get_request.call(null,$http.get,url,onSuccess);
});
