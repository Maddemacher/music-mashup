(ns musicmashup.albumArt
  (:require [musicmashup.http :as http]
            [musicmashup.constants :as constants]))

(defn setup-album-art [musicbrainzData albumAtom $http callback]
  (defn get-album-art [album]
     (println "Get album art for album " album)
     (http/getRequest $http
                     (str constants/coverArtArchiveBaseUrl (:albumId album))
                     #(if %
                          (let [updatedAlbum (assoc album :coverArtArchive %)
                                updatedAtom  (conj albumAtom updatedAlbum)]
                               (callback updatedAtom)))))

  (defn scrape-album [album]
    { :albumId (:id album)	:title (:title album) })

  (defn setup-albums [albums]
    (let [scrapedAlbums (map #(scrape-album %) albums)]
     	(mapv #(get-album-art %) scrapedAlbums)
      (println "scraped albums" scrapedAlbums)))

  (let [releaseGroups (:release-groups musicbrainzData)
     	  albums (filter #(= (:primary-type %) "Album") releaseGroups)]
   	    (setup-albums albums)))
