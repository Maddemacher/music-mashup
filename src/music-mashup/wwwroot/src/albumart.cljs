(ns musicmashup.albumArt
  (:require [musicmashup.http :as http]
            [musicmashup.constants :as constants]))

(defn scrape-cover-art-archive-response [response]
   (let [images (:images response)
         firstImage (first images)
         scraped {
                    :image (:image firstImage)
                    :small (:small (:thumbnails firstImage))
                    :large (:large (:thumbnails firstImage))
                 }]
     scraped))

(defn setup-album-art [musicbrainzData $http callback]
  (defn get-album-art [album]
     (println "Get album art for album " album)
     (http/getRequest $http
                     (str constants/coverArtArchiveBaseUrl (:albumId album))
                     #(if %
                        (callback (assoc album :coverart (scrape-cover-art-archive-response %))))))

  (defn scrape-album [album]
    { :albumId (:id album)	:title (:title album) })

  (defn setup-albums [albums]
    (let [scrapedAlbums (map #(scrape-album %) albums)]
     	(mapv #(get-album-art %) scrapedAlbums)))

  (let [releaseGroups (:release-groups musicbrainzData)
     	  albums (filter #(= (:primary-type %) "Album") releaseGroups)]
   	    (setup-albums albums)))
