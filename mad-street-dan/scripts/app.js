(function() {
    'use strict';
    angular.module('MadStreet', ['ui.router', 'rzModule', 'angular-loading-bar'])
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider

        // route for the home page
            .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'ItemController',
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'ItemController',
                },

            }

        });

        $urlRouterProvider.otherwise('/');
    }
})();