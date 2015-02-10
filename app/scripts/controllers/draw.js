'use strict';

var red = "#FF0000";
var blue = "#2E549F";
var green = "#017D0D";

angular.module('sigApp')
  .controller('DrawCtrl', function ($scope) {
        $scope.draw = function() {
            var drawView = document.getElementById("drawView");
            drawView.innerHTML = "";

            var value = parseInt($scope.selectDraw);
            switch(value) {
                case 1:
                    draw1(drawView);
                    break;
                case 20:
                    draw20(drawView);
                    break;
                default:
                    break;
            }
        }
  });

function draw1(drawView) {
    var paper = Raphael(drawView, 1000, 1000);

    var fisrtCircle = paper.circle(50, 50, 100);
    fisrtCircle.attr("fill", red);
    fisrtCircle.attr("cx", "6cm");
    fisrtCircle.attr("cy", "3cm");
    fisrtCircle.attr("r", "100");
    fisrtCircle.attr("transform", "translate(0,50)");

    var secondCircle = paper.circle(50, 50, 100);
    secondCircle.attr("fill", blue);
    secondCircle.attr("cx", "6cm");
    secondCircle.attr("cy", "2cm");
    secondCircle.attr("r", "100");
    secondCircle.attr("transform", "translate(70,150)");

    var thirdCircle = paper.circle(50, 50, 100);
    thirdCircle.attr("fill", green);
    thirdCircle.attr("cx", "6cm");
    thirdCircle.attr("cy", "2cm");
    thirdCircle.attr("r", "100");
    thirdCircle.attr("transform", "translate(-70,150)");
}

function draw20(drawView) {
    var paper = Raphael(drawView, 300, 200);

    var firstRect = paper.rect(0, 20, 300, 120);
    firstRect.attr("fill", green);
    firstRect.attr("stroke-width", 0);

    var secondRect = paper.rect(20, 30, 80, 150);
    secondRect.attr("fill", red);
    secondRect.attr("fill-opacity", 0.9);
    secondRect.attr("stroke-width", 0);

    var thirdRect = paper.rect(50, 50, 140, 80);
    thirdRect.attr("fill", blue);
    thirdRect.attr("stroke-width", 0);
}