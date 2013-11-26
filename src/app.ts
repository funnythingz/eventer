/// <reference path="reference.ts" />

var eventer = angular.module('eventer', []);

eventer.controller('greetingCtrl', ($scope) => {
    $scope.greeting = {
        title: "Eventer",
        lead: "This is a simple event registration application ;)"
    }
});

eventer.controller('addEventCtrl', ($scope) => {
    $scope.addCandidateDate = () => {
        console.log('addCandidateDate');
    }
});
