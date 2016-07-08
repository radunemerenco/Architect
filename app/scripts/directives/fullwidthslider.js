'use strict';

/**
 * @ngdoc directive
 * @name architectApp.directive:fullWidthSlider
 * @description
 * # fullWidthSlider
 */
angular.module('architectApp')
  .directive('fullWidthSlider', function ($interval) {
    return {
      template: '<ng-transclude></ng-transclude>',
      restrict: 'EA',
      transclude: true,
      controller: function ($scope) {
        $scope.imageList = [
          './images/projects/proj01/proj01_01.jpg',
          './images/projects/proj01/proj01_02.jpg',
          './images/projects/proj01/proj01_03.jpg',
          './images/projects/proj01/proj01_04.jpg',
          './images/projects/proj01/proj01_05.jpg',
          './images/projects/proj01/proj01_06.jpg'
        ];
        $scope.imageIndex = 0;
      },
      link: function (scope, element, attrs) {
        console.log(scope)
        $interval(function () {
          attrs.$set('style','background-image: url("' + scope.imageList[scope.imageIndex] + '")');
          if (scope.imageList.length > scope.imageIndex) {
            scope.imageIndex++;
          } else {
            scope.imageIndex = 0;
          }
        }, 3000);
      }
    };
  });
