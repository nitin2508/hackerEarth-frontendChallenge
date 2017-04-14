(function(window){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://starlord.hackerearth.com/cleartrip/hackernews');
    xhr.onload = function() {
        if (xhr.status === 200) {
            saveObjectIntoDb(xhr.responseText)
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
    var saveObjectIntoDb = function(response) {
        window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
            IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
            dbVersion = 1;
        var request = window.indexedDB.open("headlineStore", dbVersion);
        var db;

        request.onsuccess = function(event) {
            db = request.result;
            add(response);

        }

        request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("news", {
                keyPath: "id"
            });

        }

        function add(response) {
            var objectStore = db.transaction(["news"], "readwrite")
                .objectStore("news");
                var data =  JSON.parse(response);
            for (var i in data) {
                if (data[i].id) {
                    objectStore.add(data[i]);
                }
            }

        }

    }

})(window);
