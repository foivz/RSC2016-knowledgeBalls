angular.module('myApp')
.controller('SelectTeamCtrl', function($scope, p){
    $scope.teams = [];
    $scope.s ={
        selected: null
    };
    console.log(p);
    firebase.database().ref('teams').orderByChild('members/'+p.user).equalTo(true).once('value', function(team){
        var o = team.val();
        console.log('o',o);
        if(o == null){
            $scope.error = 'You dont\'t have any more teams';
        }else{
            var ok = Object.keys(o);
            console.log('ok',ok);
            for(var i=0; i<ok.length; i++){
                var k = o[ok[i]];
                k.key = ok[i];
                $scope.teams.push(k);
            }
            $scope.s.selected = $scope.teams[0].key;
            console.log('teams',$scope.teams);
            $scope.$digest();
        }
    })
    
    $scope.join = function(){
        var o= {};
        console.log($scope.s.selected);
        o[$scope.s.selected] = true;
        firebase.database().ref('quiz/'+p.quiz+'/teams').update(o);
        $scope.$close();
    }
})