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
;var DatepickerDemoCtrl = function ($scope, $timeout) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
        $scope.showWeeks = !$scope.showWeeks;
    };

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = ($scope.minDate) ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function () {
        console.log(0);
        $timeout(function () {
            console.log(1);
            $scope.opened = true;
        });
    };

    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
};
