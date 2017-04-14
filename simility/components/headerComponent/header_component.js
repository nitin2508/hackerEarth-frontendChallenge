(function(){
    'use strict';
    angular.module('Simility')
    .component('headerComponent',{
    templateUrl:'./components/headerComponent/header_template.html',
    controller:HeaderController
    });
    HeaderController.$inject=['$state'];
    function HeaderController($state){
        var vm =this;
        vm.goChart = function(){
            $state.go('chart')
        }
        vm.goHome = function(){
            $state.go('movie')
        }

    }
})();
