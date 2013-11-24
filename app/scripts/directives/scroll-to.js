'use strict';

angular.module('weddingApp')
  .directive('scrollTo', function () {
      function doScroll(where){
            angular.element('html,body').animate({
                scrollTop: angular.element(where).offset().top 
            }, 1200);
      }
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          if(/select/i.test(element[0].tagName)) {
              element.on('change', function(){ doScroll(element[0].value)});
          } else {
              element.on('click', function(){
                doScroll(attrs.scrollTo);
                return false;
              });
          }
          
      }
    };
  });
