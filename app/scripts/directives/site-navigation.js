'use strict';

angular.module('weddingApp')
  .directive('siteNavigation', function () {
      var win = angular.element(window);
      function setVis() {
          var element = this.element;
          if(win.scrollTop() > win.outerHeight() - 55) {
                element.removeClass('hidden');
            } else {
                element.addClass("hidden");
            }
      }
    return {
//      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var visFcn = _.bind(setVis, {'element': element});
        win.on('scroll', visFcn);
        visFcn();
      }
    };
  });
