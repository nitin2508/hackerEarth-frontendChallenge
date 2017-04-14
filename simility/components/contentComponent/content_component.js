(function() {
        'use strict';
        angular.module('Simility')
            .component('contentComponent', {
                templateUrl: './components/contentComponent/content_template.html',
                controller: ContentController
            });
        ContentController.$inject = ['SimilityService'];

        function ContentController(SimilityService, $scope) {
            var vm = this;
            vm.movies = [];
            vm.records = [];
            vm.search = '';
            vm.sortByValue = '';
            console.log(SimilityService.getData());
            if(SimilityService.getData().length<1){
                SimilityService.getMoviesData()
                    .then(function(response) {
                        var Moviedata = response.data;
                        vm.currentPage = 0;
                        console.log(response.data.length % 10);
                        var totalPage = (Moviedata.length - Moviedata.length % 10) / 10;
                        vm.paging = {
                            total: totalPage + 1,
                            current: 1,
                            onPageChanged: loadPages,
                        };

                        vm.records = response.data;
                        vm.data = response.data;
                        for (var i = 0; i < 10; i++) {
                            vm.movies.push(response.data[i]);
                        }
                        //Array.prototype.push.apply(vm.movies, response.data)
                    })

            }else{
                var Moviedata = SimilityService.getData();
                vm.currentPage = 0;
                var totalPage = (Moviedata.length - Moviedata.length % 10) / 10;
                vm.paging = {
                    total: totalPage + 1,
                    current: 1,
                    onPageChanged: loadPages,
                };

                vm.records = Moviedata;
                vm.data = Moviedata;
                for (var i = 0; i < 10; i++) {
                    vm.movies.push(Moviedata[i]);
                }
            }


            vm.sortBy = function() {
                if (vm.sortByValue.indexOf("name") > -1) {
                    vm.records.sort(function(a, b) {
                        if (vm.sortByValue.indexOf("asc") > -1) {
                            if (a.movie_title < b.movie_title) return -1;
                            if (a.movie_title > b.movie_title) return 1;
                            return 0;
                        } else {
                            if (a.movie_title > b.movie_title) return -1;
                            if (a.movie_title < b.movie_title) return 1;
                            return 0;
                        }

                    });
                    vm.paging.current = 1;
                    loadPages();
                }
                 else if (vm.sortByValue.indexOf("budget") > -1) {
                    if (vm.sortByValue.indexOf("asc") > -1) {
                        vm.records.sort(function(a, b) {
                            return (a.budget) - (b.budget);
                        })
                        loadPages();
                    }
                        else {
                            vm.records.sort(function(a, b) {
                                return (b.budget) - (a.budget);
                            })
                             vm.paging.current = 1;
                            loadPages();
                        }
                    } else if (vm.sortByValue.indexOf("year") > -1) {
                        if (vm.sortByValue.indexOf("asc") > -1) {
                            vm.records.sort(function(a, b) {
                                return (a.title_year) - (b.title_year);
                            })
                            loadPages();
                        }
                            else {
                                vm.records.sort(function(a, b) {
                                    return (b.title_year) - (a.title_year);
                                })
                                 vm.paging.current = 1;
                                loadPages();
                            }
                        }


                    }
                    vm.searchMovies = function() {
                        vm.sortByValue = '';
                        vm.records = [];
                        for (var i = 0; i < vm.data.length; i++) {

                            if (vm.data[i].movie_title.toLowerCase().indexOf(vm.search.toLowerCase()) > -1 || vm.data[i].genres.toLowerCase().indexOf(vm.search.toLowerCase()) > -1) {
                                vm.records.push(vm.data[i]);
                            }
                        }
                        vm.paging.total = ((vm.records.length - vm.records.length % 10) / 10) + 1;
                        vm.paging.current = 1;
                        loadPages();
                    }

                    function loadSearchPages() {

                    }



                    function loadPages() {
                        if (vm.records.length > 0) {
                            vm.movies = [];
                            console.log('Current page is : ' + vm.paging.current);
                            var lastIndex = 10 * vm.paging.current;
                            var startIndex = lastIndex - 10;
                            if (lastIndex > vm.records.length) {
                                lastIndex = vm.records.length;
                            }

                            for (var j = startIndex; j < lastIndex; j++) {
                                vm.movies.push(vm.records[j]);
                            }

                            // TODO : Load current page Data here

                            vm.currentPage = vm.paging.current;
                        }

                    }
                }
            })();
