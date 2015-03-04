'use strict';

angular.module('sigApp')
    .controller('MainCtrl', [
        '$scope',
        '$localStorage',
        function ($scope, $localStorage) {
            $scope.pointList = $localStorage.pointList || [];

            var point = {
                bas : 42,
                haut : 51,
                gauche : 4,
                droite : 8
            };

            var ecran = {
                bas : 400,
                haut : 0,
                gauche : 0,
                droite : 600
            };

            var a = (ecran.bas - ecran.haut) / (point.bas - point.haut);
            var b = ecran.haut - a * point.haut;
            
            var x = 42;
            var y = a * x + b;
            $scope.removePoint = function(index){
                $scope.pointList.splice(index, 1);
                $localStorage.pointList = $scope.pointList;
            },
            $scope.submitAddPoint = function(){
                if($scope.latitude || $scope.longitude) {
                    $scope.pointList.push({latitude : $scope.latitude, longitude : $scope.longitude});
                    $scope.latitude = "";
                    $scope.longitude = "";
                    $localStorage.pointList = $scope.pointList;
                } else {
                    return;
                }
            },
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
        }
    ]);