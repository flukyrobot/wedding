'use strict';

describe('Directive: contentSection', function () {

  // load the directive's module
  beforeEach(module('weddingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<content-section></content-section>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the contentSection directive');
  }));
});
