angular.module('myApp')
.controller('AddQuestionCtrl', function($scope, quiz){
    $scope.new = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        correct: ''
    }
    
    $scope.saveQuestion = function(){
        if($scope.new.question == '' || $scope.new.a == '' || $scope.new.b == '' || $scope.new.c == '' || $scope.new.d == '' || $scope.new.correct == ''){
            $scope.error = 'You haven\'t entered everything';
            return;
        }  
        $scope.error = '';
        firebase.database().ref('questions/'+quiz.id).push($scope.new);
        $scope.$close();
    };
})