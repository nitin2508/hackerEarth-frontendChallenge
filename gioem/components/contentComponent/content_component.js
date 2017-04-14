(function() {
    'use strict';
    angular.module('Gioem')
        .component('contentComponent', {
            templateUrl: './components/contentComponent/content_template.html',
            controller: ContentController
        });
    ContentController.$inject = ['GioemService', '$location', '$anchorScroll', '$q', '$timeout'];

    function ContentController(GioemService, $location, $anchorScroll, $q, $timeout) {
        var vm = this;
        vm.$onInit = activate;

        function activate() {
            vm.showCard = false;
            vm.showList = showList;
            vm.sortByValue = '';
            vm.showDescription = showDescription;
            vm.querySearch = querySearch;
            vm.searchTextChange = searchTextChange;
            vm.sortBy = sortBy;
            GioemService.getCatalysts()
                .then(function(response) {
                    vm.projectList = [];
                    vm.data = response;
                    for (var i = 0; i < response.length; i++) {

                        var title = response[i].title.toLowerCase();
                        vm.projectList.push(title);
                    }
                });
        }

        function sortBy() {
            vm.data.sort(function(a, b) {
                if (vm.sortByValue.indexOf("Asc") > -1) {
                    if (a['end.time'] < b['end.time']) return -1;
                    if (a['end.time'] > b['end.time']) return 1;
                    return 0;
                } else {
                    if (a['end.time'] > b['end.time']) return -1;
                    if (a['end.time'] < b['end.time']) return 1;
                    return 0;
                }

            });
        }

        function showList(data) {
            vm.showCard = false;
            var newHash = 'project' + data['s.no'];
            $location.hash('project' + data['s.no']);

        }

        function searchTextChange() {
        }

        function showDescription(data, index) {
            vm.descriptionData = data;
            vm.showCard = true;
            vm.index = index;

        }

        function querySearch(query) {
            var results = query ? vm.projectList.filter(createFilterFor(query)) : vm.projectList;
            return results;
        }


        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(project) {
                return (project.indexOf(lowercaseQuery) >-1);
            };

        }
    }
})();
