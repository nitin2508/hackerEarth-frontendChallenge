angular.module('Simility')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('movie', {
                url: '/movies',
                views: {
                    'header':{
                        template:' <header-component><header-component>'
                    },
                    'content': {
                        template: '<content-component></content-component>'
                    },
                }
            })
            .state('chart', {
                url: '/chart',
                views: {
                    'header':{
                        template:' <header-component><header-component>'
                    },
                    'content': {
                        template: '<chart-component></chart-component>'
                    }
                }


            })

        $urlRouterProvider.otherwise('/movies');
    }]);
