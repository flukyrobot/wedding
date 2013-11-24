'use strict';

describe('Directive: whereAmI', function () {

  // load the directive's module
  beforeEach(module('weddingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<where-am-i></where-am-i>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the whereAmI directive');
  }));
});
