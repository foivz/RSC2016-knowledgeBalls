angular.module('myApp')
.controller('TeamsCtrl', function($scope, Auth){
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
})