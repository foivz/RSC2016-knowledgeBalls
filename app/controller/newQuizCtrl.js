angular.module('myApp')
.controller('NewQuizCtrl', function($scope, Auth, $state){
    if(!Auth.loggedIn()){
        $state.go('quizzes');
    }
    $scope.dateOptions = {
        minDate: new Date()
    };
    $scope.user = Auth.getUser();
    $scope.new = {
        title: '',
        moderator: $scope.user ? $scope.user.uid : null,
        location: '',
        date: new Date(),
        time: new Date(),
        description: '',
        prizes: '',
        rules:''
    }
    
    $scope.saveQuiz = function(){
        $scope.new.date.setHours($scope.new.time.getUTCHours());
        $scope.new.date.setMinutes($scope.new.time.getUTCMinutes());
        $scope.new.startsAt = $scope.new.date.getTime();
        console.log($scope.new);
        firebase.database().ref('quiz/').push($scope.new);
    }
});