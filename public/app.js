var eventer = angular.module('eventer', []);

eventer.controller('greetingCtrl', function ($scope) {
    $scope.greeting = {
        title: "Eventer",
        lead: "This is a simple event registration application ;)"
    };
});

eventer.controller('addEventCtrl', function ($scope) {
    $scope.addCandidateDate = function () {
        console.log('addCandidateDate');
    };
});
