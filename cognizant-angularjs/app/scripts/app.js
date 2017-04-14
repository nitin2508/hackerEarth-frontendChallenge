'use strict';
angular.module('CodeCafeApp', ['ui.router', 'hljs', 'angularUtils.directives.dirPagination'])
    .config(function($stateProvider, $urlRouterProvider, hljsServiceProvider) {

        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });

        $stateProvider

        // route for the home page
            .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'IndexController'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                }
            }

        });

        $urlRouterProvider.otherwise('/');
    });