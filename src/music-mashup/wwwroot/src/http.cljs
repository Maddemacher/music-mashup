(ns musicmashup.http)

(defn send-get-request [httpMethod url onSuccess]
	(-> (httpMethod url)
		(.success (fn [result]
			(if(not(nil? onSuccess))
				(onSuccess (js->clj result :keywordize-keys true)))))
		(.error  (fn [result]
			(println "Unable to retreive data for " url " returned with result " result)))))


(defn jsonpRequest [$http url onSuccess]
	(send-get-request $http.jsonp url onSuccess))

(defn getRequest [$http url onSuccess]
  (send-get-request $http.get url onSuccess))
