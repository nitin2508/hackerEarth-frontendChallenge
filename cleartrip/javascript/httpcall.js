(function(App) {
    var getData = function(success, fail) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://starlord.hackerearth.com/edfora/hackernews');
        xhr.onload = function() {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else {
                if(fail){
                    fail(xhr.status, xhr.responseText);
                }
            }
        };
        xhr.send();
    };

    App.api = {
        getData: getData
    };
})(App);
