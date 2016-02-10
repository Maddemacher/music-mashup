(ns musicmashup.wiki
  (:require [musicmashup.http :as http]
            [musicmashup.constants :as constants]
            [musicmashup.helpers :as h]
          	[clojure.string :as s]))


(defn get-resource-url [resource]
	(-> resource
		(:url)
		(:resource)))

(defn get-wiki [$http url callback]
 	(let [wikiUrl (str constants/wikiBaseUrl (last (s/split url "/")))]
  	(http/jsonpRequest $http wikiUrl
	                   #(callback {
													:title (h/find-nested % :title)
													:description (h/find-nested % :extract)
												}))))

(defn setup-resource [getter $http callback relation]
	(getter $http (get-resource-url relation) callback))

(defn scrape-relation [rel] { :type (:type rel) :url (:url rel) })

(defn scrape-relations [relations]
	(map scrape-relation relations))

(defn setup-relational-data [data]
	(->>
		(:relations data)
		(scrape-relations)))

(defn get-relation-of-type [type relations]
				(some #(if (= type (:type %)) %) relations))

(defn setup-wiki [$http relationalData callback]
		(->> 	(setup-relational-data relationalData)
          (get-relation-of-type constants/wikiRelationTag)
  				(setup-resource get-wiki $http callback)))
