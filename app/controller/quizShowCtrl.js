angular.module('myApp')
.controller('QuizShowCtrl', function($scope, Auth, $stateParams, $uibModal){
    var id = $stateParams.id;
    console.log($stateParams);
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
    $scope.quiz = null;
    $scope.user = Auth.getUser();
    $scope.teams = [];
    $scope.questions = [];
    firebase.database().ref('quiz/'+id).once('value', function(quiz){
        $scope.quiz = quiz.val();
        firebase.database().ref('users/'+$scope.quiz.moderator).once('value', function(mod){
            $scope.quiz.user = mod.val();
            $scope.$apply();
        })
        console.log($scope.quiz);
        $scope.$apply();
    });
    
    $scope.isOwner = function(){
        if($scope.quiz == null){return false;}
        if($scope.quiz.moderator == Auth.getUser().uid){
            return true;
        }
        return false;
    }
    
    $scope.addQuestion = function(){
        if(!$scope.isOwner()){
            return false;
        }
        $uibModal.open({
          templateUrl: 'templates/addQuestion.html',
          size: 'sm',
          controller: 'AddQuestionCtrl',
          resolve: {
              quiz: id
          }
        });
    }
    
    firebase.database().ref('questions/'+id).on('child_added', function(quest){
        $scope.questions.push(quest.val());
    })
})