var allWebsites;

$(document).ready(function() {
    initializeStorage();
    getAllWebsites();
});


function getAllWebsites() {
    // $.get("https://hackerearth.0x10.info/api/one-push", {
    //     type: "json",
    //     query: "list_websites"
    // }, function(data) {
    //     allWebsites = data.websites;
    //     $("#totalwebsite").html(allWebsites.length);
    //     displayWebsites(allWebsites);
    //     $("#loader").hide();
    // });

    var data = { "websites": [{ "id": "1", "title": "daniel g. siegel", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/25.png", "url_address": "http:\/\/www.dgsiegel.net\/", "tag": "personal" }, { "id": "2", "title": "Ross Penman", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/10.png", "url_address": "https:\/\/rosspenman.com\/", "tag": "Personal" }, { "id": "3", "title": "goker \/ resume", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/19.png", "url_address": "http:\/\/gokercebeci.com\/me", "tag": "Blog" }, { "id": "4", "title": "Gilles Quenot \/ SO", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/31.png", "url_address": "https:\/\/goo.gl\/fdr5Kq", "tag": "Social" }, { "id": "5", "title": "Nithin Rao Kumblekar", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/41.png", "url_address": "http:\/\/www.nithinkumblekar.com\/", "tag": "Caricature" }, { "id": "6", "title": "I am ben", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/38.png", "url_address": "http:\/\/www.iamben.co.uk\/", "tag": "Professional" }, { "id": "7", "title": "Mathias Karlsson", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/42.png", "url_address": "https:\/\/bounty.github.com\/researchers\/avlidienbrunn.html", "tag": "Security" }, { "id": "8", "title": "randomstream", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/2.png", "url_address": "http:\/\/kracekumar.com\/", "tag": "personal" }, { "id": "9", "title": "travisneilson", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/12.png", "url_address": "http:\/\/travisneilson.com\/", "tag": "personal" }, { "id": "10", "title": "adhamdannaway", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/17.png", "url_address": "http:\/\/www.adhamdannaway.com\/", "tag": "personal" }, { "id": "38", "title": "wonderland", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/6.png", "url_address": "https:\/\/wonderland.com", "tag": "personal" }, { "id": "26", "title": "chin2km", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/6.png", "url_address": "http:\/\/www.chin2km.com", "tag": "portfolio" }, { "id": "17", "title": "ugph", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/14.png", "url_address": "http:\/\/ugph.in\/", "tag": "psdtohtml" }, { "id": "40", "title": "ffffff", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/8.png", "url_address": "http:\/\/xvh.com", "tag": "dddd" }, { "id": "36", "title": "cryptlife", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/35.png", "url_address": "http:\/\/www.cryptlife.com", "tag": "tech" }, { "id": "44", "title": "abcd", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/33.png", "url_address": "http:\/\/vaibhavbansal.in", "tag": "abcd" }, { "id": "43", "title": "vaibhav", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/9.png", "url_address": "http:\/\/vaibhavbansa.in", "tag": "vaibhav" }, { "id": "42", "title": "aishik", "favicon_image": "http:\/\/hackerearth.0x10.info\/api\/avatar\/40.png", "url_address": "http:\/\/aishikbiswas.com\/fest", "tag": "social" }] }

    allWebsites = data.websites;
    $("#totalwebsite").html(allWebsites.length);
    displayWebsites(allWebsites);
    $("#loader").hide();

}


$("#search").keyup(function() {
    var search = $("#search").val();
    filterWebsites(search);
});

function filterWebsites(search) {
    var searchString = search.toLowerCase();
    var filterWebsites = [];
    for (var i = 0; i < allWebsites.length; i++) {
        if (allWebsites[i].tag.toLowerCase().indexOf(searchString) !== -1 || allWebsites[i].url_address.toLowerCase().indexOf(searchString) !== -1 || allWebsites[i].title.toLowerCase().indexOf(searchString) !== -1) {
            filterWebsites.push(allWebsites[i]);
        }

    }
    displayWebsites(filterWebsites);
}


function displayWebsites(websites) {
    addLikes(websites);
    $("#tiles-container").html("");
    var source = $("#tile-template").html();
    var template = Handlebars.compile(source);
    var html = '';
    for (var i = 0; i < websites.length; i++) {
        html += template(websites[i]);
    }
    $("#tiles-container").html(html);
}


$("#push-button").click(function() {
    var title = $("#title").val();
    var url = $("#url").val();
    var tag = $("#tag").val();
    if (title && url && tag) {
        console.log(title, url, tag);
        var input = {
            query: "push",
            type: "json",
            title: title,
            url: url,
            tag: tag
        };
        $.get("https://hackerearth.0x10.info/api/one-push",
            input,
            function(data) {
                console.log(data);
            });
    }
});

function addLikes(websites) {
    var likesData = JSON.parse(localStorage.likesData);
    for (var i = 0; i < websites.length; i++) {
        var like = likesData[websites[i].id];
        if (like) {
            websites[i].like = like;
        } else {
            websites[i].like = 0;
        }
    }
}

function initializeStorage() {
    if (!localStorage.likesData) {
        localStorage.likesData = JSON.stringify({});
    }
}

$("#tiles-container").on('click', '.like', function() {
    var currentlike = $(this).html();
    currentlike++;
    var likesData = JSON.parse(localStorage.likesData);
    likesData[this.id] = currentlike;
    localStorage.likesData = JSON.stringify(likesData);
    $(this).html(" " + currentlike);
});