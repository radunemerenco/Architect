'use strict';

/**
 * @ngdoc directive
 * @name architectApp.directive:dropdown
 * @description
 * # dropdown
 */
angular.module('architectApp')
  .directive('dropdown', function ($rootScope, $timeout) {
    return {
      templateUrl: "/partials/dropdown.html",
      restrict: 'E',
      scope: {
        list: "=",
        selected: "=",
        showDropdown: '='
      },
      link: function postLink(scope, element, attrs) {

        scope.select = function(item) {
          scope.selected = item;
        };
        scope.$watch('showDropdown', function (newVal, prevVal) {
          if (newVal === false) {
            scope.timeoutFun = $timeout(function () {
              if (!scope.showDropdown) scope.visible = false;
            }, 1000);
          } else {
            if (scope.timeoutFun && typeof scope.timeoutFun.cancel === 'function') scope.timeoutFun.cancel()
            scope.visible = true;
          }
        });

        /*$rootScope.$on("documentClicked", function(inner, target) {
          console.log($(target[0]).is(".dropdown-display") || $(target[0]).parent('.dropdown-display').length > 0);
          if (!$(target[0]).is(".dropdown-display") && !$(target[0]).parent(".dropdown-display").length > 0)
            scope.$apply(function() {
              scope.listVisible = false;
            });
        });*/

        /*scope.$watch("selected", function(value) {
          scope.isPlaceholder = scope.selected[scope.property] === undefined;
          scope.display = scope.selected[scope.property];
        });*/
      }
    };
  });
