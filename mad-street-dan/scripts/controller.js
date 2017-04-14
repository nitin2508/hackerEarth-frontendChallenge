(function() {
    'use strict';
    angular.module('MadStreet')
        .controller('ItemController', ItemController);
    ItemController.$inject = ['ItemService', '$scope'];

    function ItemController(ItemService, $scope) {
        var self = this;
        $scope.radio = "";
        $scope.search = "";
        $scope.product = "";

        $scope.slider = {
            minValue: 1000,
            maxValue: 1000,
            options: {
                floor: 1000,
                ceil: 1000,
                step: 1
            }
        };

        $scope.round = function(value) {
            return Math.round(value);
        };

        $scope.ratings = [{
            current: 3,
            max: 5
        }];

        $scope.priceFilter = function(value) {
            $scope.product = value.length;
            if (value.price >= $scope.slider.minValue && value.price <= $scope.slider.maxValue) {
                return true;
            } else {
                return false;
            }
        };
        $scope.searchFilter = function(value) {
            if (value.name.indexOf($scope.search) != -1 || value.category_name.indexOf($scope.search) != -1) {
                return true;
            } else {
                return false;
            }

        };

        var data = ItemService.getItems();
        var response = data.products;
        $scope.hits = data.quote_available;
        for (var i = 0; i < response.length; i++) {

            if (response[i].price > $scope.slider.maxValue) {
                $scope.slider.maxValue = response[i].price;
                $scope.slider.options.ceil = response[i].price;
            } else if (response[i].price < $scope.slider.minValue) {
                $scope.slider.minValue = response[i].price;
                $scope.slider.options.floor = response[i].price;
            }
        }
        $scope.items = response;

    }
})();