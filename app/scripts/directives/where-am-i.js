'use strict';

angular.module('weddingApp')
  .directive('whereAmI', function () {
      var selected = "#main"
      function checkVis(){
          var h = angular.element(this).height(),
             scroll = angular.element(this).scrollTop();
          
          var els = angular.element('.content-section')
          
          els.each(function(idx, el){
              var $el = angular.element(el);
              var top = $el.offset().top,
                  eh = $el.height()
              if((top - 50) < scroll){
                  selected = $el.attr('id');
              }
          })
      }
       angular.element(window).on('scroll', checkVis);
    return {
//      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
         angular.element(window).on('scroll', function(){
             element.val("#" + selected)
         });
      }
    };
  });
