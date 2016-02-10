// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.constants');
goog.require('cljs.core');
musicmashup.constants.coverArtArchiveBaseUrl = "http://coverartarchive.org/release-group/";
musicmashup.constants.musicBrainzBaseUrl = "http://www.musicbrainz.org/ws/2/artist?fmt=json&inc=url-rels+release-groups&query=";
musicmashup.constants.musicBrainzArtistInfoBaseUrl = "http://musicbrainz.org/ws/2/artist/%s?&fmt=json&inc=url-rels+release-groups";
musicmashup.constants.wikiBaseUrl = "https://en.wikipedia.org/w/api.php?rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK&titles=";
musicmashup.constants.wikiRelationTag = "wikipedia";
