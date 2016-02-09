(defproject musicmashupscripts "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [noir-cljs "0.3.7"]
                 [jayq "1.0.0"]
                 [fetch "0.1.0-alpha2" :exclusions [org.clojure/clojure]]
                 [crate "0.2.3"]
                 [noir "1.3.0"]
				         [im.chit/gyr "0.3.1"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.clojure/data.json "0.2.6"]]
 :plugins [[lein-cljsbuild "1.1.2"]]
  :cljsbuild {
    :repl-listen-port 9000
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["./src"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "out/main.js"  ; default: target/cljsbuild-main.js
          :optimizations :whitespace
          :pretty-print true}}]}
  :main ^{:skip-aot true} musicmashupscripts.server)
