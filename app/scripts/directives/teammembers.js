'use strict';

/**
 * @ngdoc directive
 * @name architectApp.directive:teamMembers
 * @description
 * # teamMembers
 */
angular.module('architectApp')
  .directive('teamMembers', function () {
    return {
      templateUrl: '/partials/teammembers.html',
      restrict: 'E',
      controller: function ($scope, $location) {
        $scope.showMemberDetails = function (memberLinkName) {
          $location.path('/despre/echipa/' + memberLinkName);
        }
      },
      link: function postLink(scope, element) {
        scope.teamMembers = [{
          id: 1,
          name: 'Radu Nemerenco',
          linkName: 'radu_nemerenco',
          position: 'Director',
          shortDescr: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          img: 'http://nemerenco.com/img/profile.png'
        },{
          id: 1,
          name: 'John Smith',
          linkName: 'john_smith',
          position: 'Manager',
          shortDescr: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          img: 'http://zblogged.com/wp-content/uploads/2015/11/17.jpg'
        },{
          id: 1,
          name: 'Albert Jokovich',
          linkName: 'albert_jokovich',
          position: 'Executive',
          shortDescr: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          img: 'http://www.lawyersweekly.com.au/images/LW_Media_Library/LW620p26Partner-Profile.jpg'
        },{
          id: 1,
          name: 'Maria Sava',
          linkName: 'maria_sava',
          position: 'Secretary',
          shortDescr: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          img: 'http://www.caretofun.net/wp-content/uploads/2015/07/beautiful-girl-profile-caretofun.net-5.jpg'
        }];
      }
    };
  });
