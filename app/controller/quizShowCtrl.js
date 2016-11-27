angular.module('myApp')
.controller('QuizShowCtrl', function($scope, Auth, $stateParams){
    var id = $stateParams.id;
    console.log($stateParams);
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
    $scope.quiz = null;
    $scope.user = Auth.getUser();
    $scope.teams = [];
    firebase.database().ref('quiz/'+id).once('value', function(quiz){
        $scope.quiz = quiz.val();
        firebase.database().ref('users/'+$scope.quiz.moderator).once('value', function(mod){
            $scope.quiz.user = mod.val();
            $scope.$apply();
        })
        console.log($scope.quiz);
        $scope.$apply();
    })
})