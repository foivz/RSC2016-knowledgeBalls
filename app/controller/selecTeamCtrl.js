angular.module('myApp')
.controller('SelectTeamCtrl', function($scope, quiz){
    $scope.teams = [];
    $scope.selected = null;
    firebase.database().ref('teams').orderByChild('owner').equalTo(quiz.user).on('child_added', function(team){
        var o = team.val();
        o.key = team.key;
        $scope.teams.push(o);
    })
    
    $scope.join = function(){
        var o= {};
        o[$scope.selected] = true;
        firebase.database().ref('quiz/'+quiz.id+'/teams').update(o);
        $scope.$close();
    }
})