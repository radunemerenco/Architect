'use strict';

/**
 * @ngdoc function
 * @name architectApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the architectApp
 */
angular.module('architectApp')
  .controller('ProjectsCtrl', function ($scope, projectsService) {
    projectsService.getProjects().then(function (response) {
      $scope.projectList = response;
    });

});
