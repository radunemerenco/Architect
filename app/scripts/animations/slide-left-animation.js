'use strict';

/**
 * @ngdoc animation
 * @name .slide-left-animation
 * @description
 * # .slide-left-animation
 * Animation in the architectApp.
 */
angular.module('architectApp')
  .animation('.slide-left-animation', function ($window) {
    return {
      enter: function (element, done) {
        TweenMax.fromTo(element, 1, { left: $window.innerWidth}, {left: 0, onComplete: done});
      },

      leave: function (element, done) {
        TweenMax.to(element, 1, {left: -$window.innerWidth, onComplete: done});
      }
    };
  });