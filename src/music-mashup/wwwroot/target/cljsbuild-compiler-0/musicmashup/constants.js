// Compiled by ClojureScript 1.7.228 {}
goog.provide('musicmashup.constants');
goog.require('cljs.core');
musicmashup.constants.bandArtBaseUrl = "http://coverartarchive.org/release-group/";
musicmashup.constants.musicBrainzBaseUrl = "http://www.musicbrainz.org/ws/2/artist?fmt=json&jsoncallback=jsonpcallback&inc=url-rels+release-groups&query=";
musicmashup.constants.musicBrainzJsonTag = "&fmt=json";
musicmashup.constants.musicBrainzReleaseGroupsTag = "&inc=url-rels+release-groups";
musicmashup.constants.musicBrainzArtistInfoBaseUrl = "http://musicbrainz.org/ws/2/artist/";
musicmashup.constants.nirvanaBandArt = "http://coverartarchive.org/release-group/1b022e01-4da6-387b-8658-8678046e4cef";
musicmashup.constants.nirvanaWiki = "https://en.wikipedia.org/w/api.php?action=query&callback=JSON_CALLBACK&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana_(band)";
musicmashup.constants.wikiBaseUrl = "https://en.wikipedia.org/w/api.php?rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK&titles=";
musicmashup.constants.wikiRelationTag = "wikipedia";
musicmashup.constants.socialNetworkRelationTag = "social network";
musicmashup.constants.albumRelationTag = "albums";
musicmashup.constants.lastfmRelationTag = "last.fm";
