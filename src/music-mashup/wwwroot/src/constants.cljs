(ns musicmashup.constants)

(def coverArtArchiveBaseUrl "http://coverartarchive.org/release-group/")

(def musicBrainzBaseUrl "http://www.musicbrainz.org/ws/2/artist?fmt=json&inc=url-rels+release-groups&query=")

(def musicBrainzArtistInfoBaseUrl "http://musicbrainz.org/ws/2/artist/%s?&fmt=json&inc=url-rels+release-groups")

(def wikiBaseUrl "https://en.wikipedia.org/w/api.php?rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK&titles=")

(def wikiRelationTag "wikipedia")
