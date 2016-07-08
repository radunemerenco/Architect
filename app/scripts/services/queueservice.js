'use strict';

/**
 * @ngdoc service
 * @name architectApp.QueueService
 * @description
 * # QueueService
 * Factory in the architectApp.
 */
angular.module('architectApp')
  .factory('QueueService', function($rootScope){
    var queue = new createjs.LoadQueue(true);

    function loadManifest(manifest) {
        queue.loadManifest(manifest);

        queue.on('progress', function(event) {
            $rootScope.$broadcast('queueProgress', event);
        });

        queue.on('complete', function() {
            $rootScope.$broadcast('queueComplete', manifest);
        });
    }

    return {
        loadManifest: loadManifest
    }
  });
