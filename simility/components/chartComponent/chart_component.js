(function() {
    'use strict';
    angular.module('Simility')
        .component('chartComponent', {
            templateUrl: './components/chartComponent/chart_template.html',
            controller: ChartController
        });
    ChartController.$inject = ['SimilityService'];

    function ChartController(SimilityService, $scope) {
        var vm = this;
        vm.myChartObject = {};
        vm.myChartObject.type = 'BarChart';
        vm.index = 0;
        vm.makeChart = makeChart;
        if(SimilityService.getData().length>0){
            vm.data = SimilityService.getData();
            makeChart(null,SimilityService.getData());
        }else{
            SimilityService.getMoviesData()
            .then(function(response){
                vm.data = response.data;
                makeChart(null,response.data);
            })
        }

        function makeChart(index,data){
            var stats = data ?data:vm.data;
            var row = [];
            //var index = 0;
            if(index){
                vm.index = vm.index+15;
            }
            for (var i = vm.index; i < vm.index+15; i++) {
                if (stats[i].budget) {
                    stats[i].budget = stats[i].budget / 1000000;
                    var obj = {
                        c: [{
                                v: stats[i].movie_title
                            },
                            {
                                v: stats[i].budget
                            },
                        ]
                    };
                    row.push(angular.copy(obj));
                }

            }
            vm.myChartObject.data = {
                'cols': [{
                        id: 't',
                        label: 'movie',
                        type: 'string'
                    },
                    {
                        id: 'a',
                        label: 'Million Dollars(USD)',
                        type: 'number'
                    }
                ],
                rows: row

            };
        }


    }
})();
