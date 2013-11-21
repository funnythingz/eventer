var helloApp = angular.module('helloApp', []);

helloApp.controller('helloCtrl', function ($scope) {
    console.log($scope);
    $scope = {
        greeting: { title: 'hoge', done: false }
    };
});
