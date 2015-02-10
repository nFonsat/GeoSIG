'use strict';

angular.module('sigApp')
  .controller('MainCtrl', function ($scope) {
    $scope.submitSexToDec = function(){
        $scope.sexRes = ($scope.sexDeg + ($scope.sexMin/60) + ($scope.sexSec/3600));
    },
    $scope.submitDecToSex = function() {
        var decimal = $scope.decValue;
        decimal = decimal.toString().replace(',','.');

        var degrees = decimal - decimal % 1;

        var minutes = decimal % 1 * 60.0001 - (decimal % 1 * 60.0001) % 1;
        console.log(minutes);

        var secondes = (decimal % 1 * 60) % 1 * 60;
        secondes = Math.round( secondes * 10000) / 10000;
        console.log(secondes);

        if(secondes == 60){ secondes = 0; } 

        $scope.decRes = degrees + "° " + minutes + "' " + secondes + " \"";
        console.log(degrees + "° " + minutes + "' " + secondes + " \"");
    }
  });