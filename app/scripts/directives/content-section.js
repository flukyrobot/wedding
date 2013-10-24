'use strict';

angular.module('weddingApp')
  .directive('contentSection', function () {
    return {
      // template: '<div></div>',
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the contentSection directive');
      }
    };
  });
