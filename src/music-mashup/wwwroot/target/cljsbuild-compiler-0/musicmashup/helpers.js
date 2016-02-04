// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.helpers');
goog.require('cljs.core');
musicmashup.helpers.find_nested = (function musicmashup$helpers$find_nested(m,k){
return cljs.core.some.call(null,k,cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.identity,m)));
});
musicmashup.helpers.find_sveral_nested = (function musicmashup$helpers$find_sveral_nested(m,k){
return cljs.core.filter.call(null,k,cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.identity,m)));
});
