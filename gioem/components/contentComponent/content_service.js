(function() {
    'use strict';
    angular.module('Gioem')
        .service('GioemService', GioemService);

    GioemService.$inject = ['$http'];

    function  GioemService($http) {
        var data =[];
        this.getData = function(){
            return data;
        };
        this.getCatalysts = function() {

            var promise = $http({
                method: 'GET',
                url: 'http://starlord.hackerearth.com/kickstarter'
            }).then(function(response) {
                for(var i=0;i<response.data.length;i++){
                    if(response.data[i].url){
                        response.data[i].url = 'https://www.kickstarter.com'+response.data[i].url;
                    }
                }
                data = response.data;
                return data;
            });
            return promise;
        };
    }
}());
