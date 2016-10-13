(function(){
  angular.module('Djent', ['ngMaterial'])
  //
  .controller('MainController', function($scope, $mdMedia){
    //
    $scope.content = false;
    $scope.pageIndex = 1;
    $scope.start = "start";
    $scope.text = "djent";
    $scope.dval = 0;
    $scope.startDjent = function() {
      // Get total number of pages
      if($scope.pageIndex <= 5){
        if ($scope.pageIndex == 1){
          $scope.content = true;
        }
        else if ($scope.pageIndex == 5){
          $scope.pageIndex++;
          $scope.arrow = false;
          $scope.start = "end";
          return;
        }
        $scope.arrow = true;
        $scope.start = "next";
        $scope.pageIndex++;
      } else {

      }

    };
    $scope.inc = function(ev){
      $scope.dval++;
      if($scope.dval == 5){
        $scope.text = "0000000";
      }
    }
    //
  })
  .controller('pageTwoController', function($scope, $mdMedia, $mdDialog){

  })
  .controller('pageThreeController', function($scope, $mdMedia, $mdDialog){

  })
  .controller('pageFourController', function($scope, $mdMedia, $mdDialog){

  })
  .controller('pageFiveController', function($scope, $mdMedia, $mdDialog){

  })
  //
  .directive('openTools', function() {
    return {
      link: function(scope, elem, attrs) {
        elem.on('click',function(){
          var pos = elem.css('bottom');
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
