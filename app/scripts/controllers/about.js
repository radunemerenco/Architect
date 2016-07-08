'use strict';

/**
 * @ngdoc function
 * @name architectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the architectApp
 */
angular.module('architectApp')
  .controller('AboutCtrl', function ($scope, $rootScope, $route, $routeParams, $location) {

    $scope.pages = [{
      title: 'Prezentare',
      link: 'prezentare'
    },{
      title: 'Echipa',
      link: 'echipa'
    },{
      title: 'Istoric',
      link: 'istoric'
    }];

    if ($scope.pages.indexOf($rootScope.previousPage) !== -1) {
      $scope.aboutMenuToggled = true;
    }

    $scope.isActivePage = function (page) {
      return $routeParams.page === page.link;
    };
    $scope.goToPage = function (page) {
      $location.path('/despre/' + page.link);
      $rootScope.previousPage = $routeParams.page
    };

    console.log($route)
    console.log($routeParams)
    console.log($location)
    console.log($rootScope)

    if (!$routeParams.page || $routeParams.page.length < 1) {
      $scope.goToPage($scope.pages[0]);
    }
    $scope.getCurrentPage = function () {
      return $routeParams.page;
    };

    $scope.dropDownMenu = [
      {name: 'Test', link: '#/projects/test'}
    ];
    $scope.showDropdown = true;
  });
