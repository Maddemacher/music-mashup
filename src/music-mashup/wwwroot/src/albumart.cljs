(ns musicmashup.albumArt
  (:require [musicmashup.http :as http]
            [musicmashup.constants :as constants]))


(defn get-album-art [$http album]
 	(println "Get album art for album " album)
  (http/getRequest $http
                   (str constants/coverArtArchiveBaseUrl (:albumId album))
                   #(if %
                      (do
	                      	(assoc album :coverArtArchive %)
	                      	(let [index (first
	                                    	(keep-indexed
	                                           (fn [idx alb]
	                                             (if (= (:albumId album) (:albumId alb))
	                                               idx)
	                                              @artistAlbums)))
		                             updatedAtom (if index
		                                           (assoc @artistAlbums index album)
		                                           (conj @artistAlbums album))]
										 				(println updatedAtom)
		                       	(reset! artistAlbums updatedAtom))))))

(defn scrape-album [album] { :albumId (:id album)	:title (:title album) })

(defn setup-albums [albums $http]
  (let [scrapedAlbums (map #(scrape-album %) albums)]
   	(mapv #(get-album-art $http %) scrapedAlbums)
    (println "scraped albums" scrapedAlbums)))

(defn setup-album-art [musicbrainzData $http]
  (let [releaseGroups (:release-groups musicbrainzData)
       	albums (filter #(= (:primary-type %) "Album") releaseGroups)]
   	(println "release groups " releaseGroups)
   	(setup-albums albums $http)))
