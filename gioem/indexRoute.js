angular.module('Gioem')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('movie', {
                url: '/projects',
                views: {
                    'header':{
                        template:' <header-component><header-component>'
                    },
                    'content': {
                        template: '<content-component></content-component>'
                    },
                }
            });

        $urlRouterProvider.otherwise('/projects');
    }]);
