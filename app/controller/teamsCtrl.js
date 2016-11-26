angular.module('myApp')
.controller('TeamsCtrl', function($scope, Auth){
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
    $scope.user = Auth.getUser();
    $scope.teams = [];
    firebase.database().ref('teams').orderByChild('members/'+$scope.user.uid).once('value', function(teams){
        var keys = Object.keys(teams.val());
        var now = Date.now();
        for(var i=0; i<keys.length; i++){
            var o = teams.val()[keys[i]];
            o.key = keys[i];
            $scope.teams.push(o);
        }
        console.log($scope.teams);
        $scope.$apply();
    })
})