'use strict';

angular.module('CodeCafeApp')
    .controller('IndexController', ['$scope', 'CodeCafeService', function($scope, CodeCafeService) {
        $scope.search = "";
        $scope.filterByStatus = {};
        $scope.filterStats = CodeCafeService.getStats();
        console.log(CodeCafeService.getCode());
        $scope.websites = CodeCafeService.getCode();
        // .then(function(websites) {
        //     console.log(websites);
        //     $scope.websites = websites;
        // });

    }]);