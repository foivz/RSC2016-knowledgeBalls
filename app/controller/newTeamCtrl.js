angular.module('myApp')
.controller('NewTeamCtrl', function($state, $scope, Auth){
    if(!Auth.loggedIn()){
        $state.go('teams');
    }
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
    
    $scope.new = {
        title: '',
        member: '',
        membersDisplay: [],
        members: []
    }
    
    $scope.addMember = function(){
        console.log($scope.new.member);
        firebase.database().ref('users/'+$scope.new.member).once('value', function(snap){
            console.log(snap.val());
            if(snap.val() != null){
                $scope.new.members.push($scope.new.member);
                $scope.new.membersDisplay.push(snap.val());
                $scope.new.member = '';
                $scope.$apply();
            }
        });
    };
    
    $scope.createTeam = function(){
        if($scope.new.title == ''){
            $scope.error = 'You havent entered title';
            return;
        }
        if($scope.new.members.length != 3){
            $scope.error = 'You haven\t added 3 members';
            return;
        }
        $scope.error  ='';
        var team  = {
            title: $scope.new.title,
            members: {},
            owner: Auth.getUser().uid
        };
        for(var i = 0; i < $scope.new.members.length; i++){
            team.members[$scope.new.members[i]] = true;
        }
        
        firebase.database().ref('teams/').push(team);
        $state.go('teams');
        
    }
})