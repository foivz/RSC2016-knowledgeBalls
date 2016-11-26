angular.module('myApp')
.controller('AppCtrl', function($scope, $firebaseAuth){
    $scope.user = null;
    $firebaseAuth().$onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser);
          $scope.user = firebaseUser;
      } else {
        console.log("Signed out");
          $scope.user = null;
      }
    });
    
    $scope.logout = function(){
        $firebaseAuth().$signOut();
    }
})