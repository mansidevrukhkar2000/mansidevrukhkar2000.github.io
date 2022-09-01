(function () {

    'use strict';
    angular.module('LunchChecker', [])

    .controller('LunchCheckerController', function ($scope,
      ) {
            $scope.messageResult = "";
            $scope.listItems="";
           
           

            $scope.checkList = function () {

                $scope.itemCount = $scope.listItems.split(",").length;
                console.log("itemCount: " + $scope.itemCount);
                $scope.messageResult =  $scope.listItems == "" ? "Please enter data first": $scope.itemCount <= 3? "Enjoy!": "Too much!";
                

             
              };
       
    });
})();