(function(){
  angular.module('Djent', ['ngMaterial'])
  //
  .controller('MainController', function($scope){
    //
    $scope.pageIndex = 1;
    $scope.start = "start";
    //
    $scope.startDjent = function() {
      // Get total number of pages
      if($scope.pageIndex <= 6){
        if ($scope.pageIndex == 6){
          $scope.pageIndex++;
          $scope.arrow = false;
          $scope.start = "Finished";
          console.log("Done");
          return;
        }
        $scope.arrow = true;
        $scope.start = "next";
        $scope.pageIndex++;
        console.log("lets djent " + $scope.pageIndex);
      } else {

      }

    };
    //
  })
  //
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
