(function() {
    'use strict';
    angular.module('Simility')
        .service('SimilityService', SimilityService);

    SimilityService.$inject = ['$http'];

    function  SimilityService($http) {
        var data =[];
        this.getData = function(){
            return data;
        }
        this.getMoviesData = function() {

            var promise = $http({
                method: 'GET',
                url: 'http://starlord.hackerearth.com/simility/movieslisting'
            }).then(function(response) {
                for(var i=0;i<response.data.length;i++){
                    if(response.data[i].title_year){
                        response.data[i].title_year = parseInt(response.data[i].title_year);
                    }
                    if(response.data[i].budget){
                        response.data[i].budget = parseInt(response.data[i].budget);
                    }
                }
                data = response.data;
                return response;
            });
            return promise;
        }
    }
}());
