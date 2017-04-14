(function(){
    'use strict';
    angular.module('Gioem')
    .component('headerComponent',{
    templateUrl:'./components/headerComponent/header_template.html',
    controller:HeaderController
    });
    HeaderController.$inject=['$state'];
    function HeaderController($state){


    }
})();
