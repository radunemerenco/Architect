'use strict';

describe('Directive: projectListItem', function () {

  // load the directive's module
  beforeEach(module('architectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-list-item></project-list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the projectListItem directive');
  }));
});
