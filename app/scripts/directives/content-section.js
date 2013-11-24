'use strict';

angular.module('weddingApp')
  .directive('contentSection', function () {
      function setMinHeight(){
        this.element.css({'minHeight': angular.element(window).outerHeight()})
        this.element.css({'maxWidth': angular.element(window).outerWidth()})
      }
    return {
      // template: '<div></div>',
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        var fcn = _.bind(setMinHeight, {element:element});
          angular.element(window).on('resize', fcn);
          fcn();
      }
    };
  });
