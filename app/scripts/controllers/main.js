'use strict';

/**
 * @ngdoc function
 * @name architectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the architectApp
 */
angular.module('architectApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
