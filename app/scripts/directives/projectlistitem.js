'use strict';

/**
 * @ngdoc directive
 * @name architectApp.directive:projectListItem
 * @description
 * # projectListItem
 */
angular.module('architectApp')
  .directive('projectListItem', function ($location) {
    return {
      templateUrl: "/partials/projectlistitem.html",
      restrict: 'E',
      scope: {
        project: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.goToProject = function (projectId) {
          console.log(projectId)
          $location.path('/proiect/' + projectId);
        };
      }
    };
  });
