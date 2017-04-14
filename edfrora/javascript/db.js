(function(App) {

    window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 1;
    var request = window.indexedDB.open("headlineStore", dbVersion);
    var db;

    request.onsuccess = function(event) {
        db = request.result;
    }
    request.onupgradeneeded = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("news", {
            keyPath: "id"
        });

        objectStore.createIndex('author','author');
        objectStore.createIndex('num_points','num_points');

    }

    var addHeadlines = function(headlines) {
        var objectStore = db.transaction(["news"], "readwrite")
            .objectStore("news");
        for (var i in headlines) {
            if (headlines[i].id) {
                objectStore.add(headlines[i]);
            }
        }
    }
    var readHeadLines = function(success,filter,sort) {
        var objectStore = db.transaction("news").objectStore("news");
        var headlines = []
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                if(filter){
                    if(cursor.value.author.indexOf(filter)!==-1){
                        headlines.push(cursor.value);
                    }

            }else {
                headlines.push(cursor.value);
            }

                cursor.continue();
            } else {
                if(sort === 'ascending'){
                    headlines.sort(function(a, b){return a.num_points-b.num_points});
                }
                else if(sort === 'descending'){
                    headlines.sort(function(a, b){return b.num_points -a.num_points});
                }
                return success(headlines);
            }

        };


    }


    App.db = {
        addHeadlines: addHeadlines,
        readHeadlines: readHeadLines
    }
})(App);
