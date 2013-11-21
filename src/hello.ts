/// <reference path="reference.ts" />

var helloApp = angular.module('helloApp', []);

helloApp.controller('helloCtrl', ($scope) => {
    $scope.greeting = {
        title: "title",
        lead: "lead text lead text lead text lead text lead text lead text "
    }
});
