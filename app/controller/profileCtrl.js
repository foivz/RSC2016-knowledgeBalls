angular.module('myApp')
.controller('ProfileCtrl', function($scope, Auth){
    $scope.user = Auth.getUser();
})