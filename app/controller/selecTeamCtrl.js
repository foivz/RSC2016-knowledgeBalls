angular.module('myApp')
.controller('SelectTeamCtrl', function($scope, p){
    $scope.teams = [];
    $scope.selected = null;
    console.log(p);
    firebase.database().ref('teams').orderByChild('owner').equalTo(p.user).once('value', function(team){
        var o = team.val();
        console.log('o',o);
        if(o == null){
            $scope.error = 'You dont\'t have any more teams';
        }else{
            o.key = team.key;
            $scope.teams.push(o);
            $scope.$digest();
        }
    })
    
    $scope.join = function(){
        var o= {};
        o[$scope.selected] = true;
        firebase.database().ref('quiz/'+p.quiz+'/teams').update(o);
        $scope.$close();
    }
})