(function(App){
    var searchString='';
    App.api.getData(function(data){
        App.db.addHeadlines(data);
        var headlines = App.db.readHeadlines(function(data){
            appendToHtml(data);
        });
    })

     App.search = function (){
         searchString = document.getElementById("search-input").value;
        var headlines = App.db.readHeadlines(function(data){
            appendToHtml(data);
        },searchString);
    }


    App.sort = function (type){
       var headlines = App.db.readHeadlines(function(data){
           appendToHtml(data);
       },searchString,type);
    }

    function getHeadline(headline,index){
    var html = '<div class="headline">'+
            '<div class="first-line">'+
            ' <h4 class="index" >'+index+'.</h4>'+
             '<div>'+
                 '<a target="_blank" href="'+headline.url+'">'+
                    '<p>'+headline.title+'</p>'+
                '</a>'+
             '</div>'+
         '</div>'+
        '<p class="secound-line">'+headline.num_points+' by '+headline.author+' | Created on '+headline.created_at+' |  '+headline.num_comments+' Comments </p>'+
    '</div>';
            return html;
    }

    function appendToHtml(headlines){
        var html='';
        for(var i=0;i<headlines.length;i++){
            var headlineHtml = getHeadline(headlines[i],i+1);
            html =html+headlineHtml;
        }
        var div = document.getElementById('headlines');
        div.innerHTML = html;


    }
})(App);
