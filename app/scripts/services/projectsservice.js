'use strict';

/**
 * @ngdoc service
 * @name architectApp.projectsService
 * @description
 * # projectsService
 * Factory in the architectApp.
 */
angular.module('architectApp')
  .factory('projectsService', function (Data) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      getProjects: function () {
        return Data.get('/data/projects.json');
      },
      getProjectById: function (projectId) {
        return this.getProjects().then(function(response) {
          for (let i = 0; i < response.length; i++) {
            if (response[i].id === projectId) return response[i];
          }
          return null;
        });
      }
    };
  });
