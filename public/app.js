var helloApp = angular.module('helloApp', []);

helloApp.controller('helloCtrl', function ($scope) {
    $scope.greeting = {
        title: "title",
        lead: "lead text lead text lead text lead text lead text lead text "
    };
});
