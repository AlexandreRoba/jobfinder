/// <reference path='../../typings/angularjs/angular.d.ts'/>
angular.module("app", []);
angular.module("app").controller("testCtrl", function ($scope) {
    $scope.jobs = [
        { title: "Sales Person", description: "You will fight dragons" },
        { title: "Developer Person", description: "You will develop dragons" }];
});