'use strict';

angular.module('weddingApp')
  .directive('fitText', function() {
  	function fittext(){
  		var child = angular.element(this.child);
  		var parent = angular.element(this.parent);
  		
  		if(child.width() < parent.width()){
	  		while(child.width() < parent.width()){
	  			child.css('font-size', (parseInt(child.css('font-size'),10) + 1) + 'px');
	  		}
  		} else if(child.width() > parent.width()) {
  			while(child.width() > parent.width()){
	  			child.css('font-size', (parseInt(child.css('font-size'),10) - 1) + 'px');
	  		}
  		}



  	}
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      	var sel = attrs.fitText ? element.closest(attrs.fitText) : element.parent();
      	var refit = _.bind(fittext, {'child': element, 'parent': sel})
      	// fittext({'child':element, 'parent':sel});
      	setTimeout(refit, 350);
      	angular.element(window).on('resize',refit)
      	// fittext(element, element)
      }
    };
  });
