/// <reference path="reference.ts" />

var eventer = angular.module('eventer', []);

eventer.controller('greetingCtrl', ($scope) => {
    $scope.greeting = {
        title: "Eventer",
        lead: "This is a simple event registration application ;)"
    }
});

eventer.controller('addEventCtrl', ($scope) => {

    var exDatePrint = () => {
        var nowDate: Date = new Date();

        return nowDate.getMonth()
        + '/' + nowDate.getDate()
        + '/' + nowDate.getFullYear()
        +' 19:00 PM'
    }

    $scope.candidateDates = [{value: exDatePrint()}];

    $scope.addCandidateDate = () => {
        $scope.candidateDates.push({value: ''});
        setTimeout(() => {
            $('.datetimepicker').datetimepicker();
        }, 100);
    }

    $(() => {
        $('.datetimepicker').datetimepicker();
    });

});
