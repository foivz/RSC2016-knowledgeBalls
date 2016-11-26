angular.module('myApp')
.controller('AppCtrl', function($scope, $firebaseAuth, FirebaseService){
    $scope.user = null;
    $firebaseAuth().$onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser);
          $scope.user = firebaseUser;
          FirebaseService.saveUser(firebaseUser.uid,firebaseUser.displayName, firebaseUser.photoURL);
      } else {
        console.log("Signed out");
          $scope.user = null;
      }
    });
    
    $scope.logout = function(){
        $firebaseAuth().$signOut();
    }
})