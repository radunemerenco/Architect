'use strict';

describe('Directive: bgImage', function () {

  // load the directive's module
  beforeEach(module('architectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bg-image></bg-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bgImage directive');
  }));
});
