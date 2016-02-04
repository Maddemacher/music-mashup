(ns musicmashup.http)

(defn getRequest [$http, url, onSuccess]
	(-> ($http.get url)
		(.success (fn [result]
			(if(not(nil? onSuccess))
				(onSuccess (js->clj result :keywordize-keys true)))))
		(.error  (fn [result]
			(println "Unable to retreive data for " url " returned with result " result)))))
