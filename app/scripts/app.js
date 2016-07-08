'use strict';

/**
 * @ngdoc overview
 * @name architectApp
 * @description
 * # architectApp
 *
 * Main module of the application.
 */
angular
  .module('architectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.router.metatags',
    'toaster',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/despre', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/despre/:page', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    /*$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix = '!';*/
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/despre', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/despre/:page', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/proiecte', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/parteneri', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl',
        controllerAs: 'partners'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl',
        controllerAs: 'media'
      })
      .when('/contacte', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .when('/proiect/:projectId', {
        templateUrl: 'views/projectdetails.html',
        controller: 'ProjectDetailsCtrl',
        controllerAs: 'ProjectDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
    /*$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix = '!';*/
  })
  .run(['$rootScope', 'MetaTags', '$animate', function runBlock($rootScope, MetaTags, $animate) {
    $rootScope.MetaTags = MetaTags;

    $animate.enabled(true);

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      $rootScope.currentController = '';
      if (next.controllerAs && next.controllerAs.length > 0) {
        $rootScope.currentController = next.controllerAs;
      }
      $rootScope.$emit('appRouteChanged', next, current)
    });

    angular.element(document).on("click", function(e) {
      $rootScope.$broadcast("documentClicked", angular.element(e.target));
    });
  }]);
