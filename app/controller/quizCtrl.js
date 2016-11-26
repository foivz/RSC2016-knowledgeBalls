angular.module('myApp')
.controller('QuizzesCtrl', function($scope, Auth){
    $scope.quizes = [];
    $scope.loggedIn = function(){
        return Auth.loggedIn();
    }
    firebase.database().ref('quiz').orderByChild('startsAt').once('value', function(quizes){
        var keys = Object.keys(quizes.val());
        var now = Date.now();
        for(var i=0; i<keys.length; i++){
            if(now < quizes.val()[keys[i]].startsAt){
                var o = quizes.val()[keys[i]];
                o.key = keys[i];
                $scope.quizes.push(o);
            }
        }
        console.log($scope.quizes);
        $scope.$apply();
    })
    
})