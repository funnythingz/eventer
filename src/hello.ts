/// <reference path="reference.ts" />

var helloApp = angular.module('helloApp', []);

helloApp.controller('helloCtrl', ($scope) => {
    console.log($scope);
    $scope = {
        greeting: {title: 'hoge', done: false}
    }
});
