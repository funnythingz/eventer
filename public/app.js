var eventer = angular.module('eventer', []);

eventer.controller('greetingCtrl', function ($scope) {
    $scope.greeting = {
        title: "Eventer",
        lead: "This is a simple event registration application ;)"
    };
});

eventer.controller('addEventCtrl', function ($scope) {
    var exDatePrint = function () {
        var nowDate = new Date();

        return nowDate.getMonth() + '/' + nowDate.getDate() + '/' + nowDate.getFullYear() + ' 19:00 PM';
    };

    $scope.candidateDates = [{ value: exDatePrint() }];

    $scope.addCandidateDate = function () {
        $scope.candidateDates.push({ value: '' });
    };
});
