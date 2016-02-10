(ns musicmashup.constants)

(def coverArtArchiveBaseUrl "http://coverartarchive.org/release-group/")

(def musicBrainzBaseUrl "http://www.musicbrainz.org/ws/2/artist?fmt=json&jsoncallback=jsonpcallback&inc=url-rels+release-groups&query=")

(def musicBrainzJsonTag "&fmt=json")

(def musicBrainzReleaseGroupsTag "&inc=url-rels+release-groups")

(def musicBrainzArtistInfoBaseUrl "http://musicbrainz.org/ws/2/artist/")

(def nirvanaBandArt "http://coverartarchive.org/release-group/1b022e01-4da6-387b-8658-8678046e4cef")

(def nirvanaWiki "https://en.wikipedia.org/w/api.php?action=query&callback=JSON_CALLBACK&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana_(band)")

(def wikiBaseUrl "https://en.wikipedia.org/w/api.php?rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK&titles=")

(def wikiRelationTag "wikipedia")

(def socialNetworkRelationTag "social network")

(def lastfmRelationTag "last.fm")
