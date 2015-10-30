/// <reference path='../../typings/angularjs/angular.d.ts'/>
/// <reference path='../../typings/angularjs/angular-resource.d.ts'/>

angular.module("app", ["ngResource"]);
angular.module("app").controller("testCtrl", ($scope, $resource) => {
    $scope.jobs = $resource("api/jobs").query();
});
