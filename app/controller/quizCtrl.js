angular.module('myApp')
.controller('QuizzesCtrl', function($scope, Auth){
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
})