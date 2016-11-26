angular.module('myApp')
.controller('LoginCtrl', function($scope, $firebaseAuth, $state){
   
    $scope.facebookLogin = function(){
        $firebaseAuth().$signInWithPopup("facebook").then(function(result) {
          console.log("Signed in as:", result.user.uid);
          $state.go('home');
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
    }
    $scope.googleLogin = function(){
        $firebaseAuth().$signInWithPopup("google").then(function(result) {
          console.log("Signed in as:", result.user.uid);
          $state.go('home');
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
    }
    $scope.twitterLogin = function(){
        $firebaseAuth().$signInWithPopup("twitter").then(function(result) {
          console.log("Signed in as:", result.user.uid);
          $state.go('home');
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
    }
})