angular.module('myApp')
.service('FirebaseService', function(){
    this.saveUser = function(uid, name, photo){
        firebase.database().ref('users/'+uid).update({displayName: name, photoURL: photo});
    };
});