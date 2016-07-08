'use strict';

/**
 * @ngdoc directive
 * @name architectApp.directive:timeline
 * @description
 * # timeline
 */
angular.module('architectApp')
  .directive('timeline', function () {
    return {
      templateUrl: '/partials/timeline.html',
      restrict: 'E',
      controller: function ($scope) {
        // body...
      },
      link: function postLink(scope, element) {
        // body...
      }
    };
  });
