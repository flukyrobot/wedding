'use strict';

angular.module('weddingApp')
  .directive('map', function () {
      function setSize(){
          
          angular.element("#map").css('width', angular.element('div.big').width())
      }
    return {
//      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          angular.element(window).on('scroll', setSize);
          setSize();
      }
    };
  });
