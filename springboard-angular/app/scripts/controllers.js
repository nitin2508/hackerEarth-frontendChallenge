'use strict';

angular.module('springBoardApp')
    .controller('IndexController', ['$scope', 'LearningPathsService', function ($scope, LearningPathsService) {

        $scope.search = {};
        $scope.sortBy = "";
        $scope.totalVotes=LearningPathsService.getTotalVotes();

        $scope.courses = LearningPathsService.getCourses();

        $scope.clearSort=function(){
           $scope.sortBy = ""; 
        };  
        $scope.upvote = function (course) {
        LearningPathsService.upvote(course);
        };
        $scope.downvote = function (course) {
        LearningPathsService.downvote(course);
        };


    }]);
