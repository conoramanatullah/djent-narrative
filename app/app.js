(function(){
  angular.module('Djent', ['ngMaterial', 'ngAnimate'])

  .controller('MainController', function($scope){

    $scope.pageIndex = 1;
    $scope.start = "start";
    //
    $scope.startDjent = function() {
      // $('#page2').addClass('fade');
      $scope.pageIndex = 2;
      $scope.start = "next";
      console.log("lets djent " + $scope.pageIndex);
    };



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
