angular.module('myApp')
.service('Auth', function($firebaseAuth){
    var user = null;
    $firebaseAuth().$onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
          user = firebaseUser;
      } else {
        console.log("Signed out");
          user = null;
      }
    });
})