(function(){
  angular.module('Djent', ['ngMaterial'])

  .controller('MainController', function($scope){

  })

  .directive('openTools', function() {
    return {
      link: function(scope, elem, attrs) {
        elem.on('click',function(){
          const pos = elem.css('bottom');
          if(pos == '0px'){
            elem.css('bottom','-15vh');
          } else {
            elem.css('bottom','0');
          }
        })
      }
    }
  });




})();
