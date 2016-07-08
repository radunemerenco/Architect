'use strict';

/**
 * @ngdoc function
 * @name architectApp.controller:AppController
 * @description
 * # AppController
 * Controller of the architectApp
 */
angular.module('architectApp')
  .controller('AppController', function ($scope, $rootScope, $location) {
    $scope.navTabs = [
      {link: '/', name: 'Acasa', controller: 'main'},
      {link: '/despre/prezentare', name: 'Despre Noi', controller: 'about', subMenu: [
        {link: '/despre/prezentare', name: 'Prezentare', controller: 'about'},
        {link: '/despre/echipa', name: 'Echipa', controller: 'about'},
        {link: '/despre/istoric', name: 'Istoric', controller: 'about'}
      ]},
      {link: '/proiecte', name: 'Proiecte', controller: 'projects', subMenu: [
        {link: '/proiecte/#', name: 'Proiect1', controller: 'projects'},
        {link: '/proiecte/#', name: 'Proiect1', controller: 'projects'},
        {link: '/proiecte/#', name: 'Proiect1', controller: 'projects'}
      ]},
      {link: '/parteneri', name: 'Parteneri', controller: 'partners'},
      {link: '/media', name: 'Media', controller: 'media'},
      {link: '/contacte', name: 'Contacte', controller: 'contacts'},
    ];
    $scope.isActiveTab = function (navTab) {
      if (navTab.controller === $rootScope.currentController) {
        $scope.activeTab = navTab;
        return true
      }
      return false;
    };
  });
