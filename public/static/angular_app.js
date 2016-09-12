/**
 * Created by Виталий on 09.09.2016.
 */
angular.module('app', []);

angular.module('app').controller('i/o', function($scope, $http) {
    $scope.first = false;
    $scope.second = false;
    $scope.third = false;
    $scope.NameChange = function () {
        // angular in node *******************************************8
        var s = $http.get('/aaa')
            .success(function(data) {
                console.log(data);
            });
        // ***************************************************************
        $scope.greeting = $scope.name.substr(2);
    };
    $scope.ChooseFirst = function () {
        $scope.first = !$scope.first;
        $scope.second = false;
        $scope.third = false;
    }
    $scope.ChooseSecond = function () {
        $scope.first = false;
        $scope.second = !$scope.second;
        $scope.third = false;
    }
    $scope.ChooseThird = function () {
        $scope.first = false;
        $scope.second = false;
        $scope.third = !$scope.third;
    }
});