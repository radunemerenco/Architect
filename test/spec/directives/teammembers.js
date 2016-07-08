'use strict';

describe('Directive: teamMembers', function () {

  // load the directive's module
  beforeEach(module('architectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<team-members></team-members>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the teamMembers directive');
  }));
});
