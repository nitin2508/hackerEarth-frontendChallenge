'use strict';
angular.module('MadStreet')
    .directive('starRating', function() {
        return {
            restrict: 'A',
            template: '<div class="rating">' +
                '<span ng-repeat="star in stars" ng-class="star">' +
                '\u2605' +
                '</span>' +
                '</div>',
            scope: {
                ratingValue: '=',
                max: '='
            },
            link: function(scope, elem, attrs) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            }
        }
    });