/**
 * Created by Виталий on 09.09.2016.
 */
angular.module('app', []);
//var s = require('../../../server_API.js');

angular.module('app').controller('i/o', function($scope, $http) {
    $scope.NameChange = function () {
        // angular in node *******************************************8
        var s = $http.get('/aaa')
            .success(function(data) {
                console.log(data);
            });
        // ***************************************************************
        $scope.greeting = $scope.name.substr(2);
    }
});