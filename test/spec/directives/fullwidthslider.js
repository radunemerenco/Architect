'use strict';

describe('Directive: fullWidthSlider', function () {

  // load the directive's module
  beforeEach(module('architectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<full-width-slider></full-width-slider>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fullWidthSlider directive');
  }));
});
