'use strict';

angular.module('weddingApp')
  .directive('fitText', function() {
  	function fittext(){
  		var child = angular.element(this.child);
  		var parent = angular.element(this.parent);
        var win = angular.element(window);
  		
  		if(child.width() < parent.width() && parent.height() < win.height()){
	  		while(child.width() < parent.width()){
	  			child.css('font-size', (parseInt(child.css('font-size'),10) + 1) + 'px');
	  		}
  		} else if(child.width() > parent.width() || parent.height() > win.height()) {
  			while(child.width() > parent.width()){
	  			child.css('font-size', (parseInt(child.css('font-size'),10) - 1) + 'px');
	  		}
  		}
        console.log(parent.height())


  	}
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      	var sel = attrs.fitText ? element.closest(attrs.fitText) : element.parent();
          console.log(sel[0])
      	var refit = _.bind(fittext, {'child': element, 'parent': sel})
      	// fittext({'child':element, 'parent':sel});
      	setTimeout(refit, 350);
      	angular.element(window).on('resize',refit)
      	// fittext(element, element)
      }
    };
  });
