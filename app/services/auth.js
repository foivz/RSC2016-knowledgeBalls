angular.module('myApp')
.service('Auth', function($firebaseAuth){
    var user = null;
    this.saveUser = function(u){
        user = u; 
    }
    this.removeUser = function(){
        user = null;
    }
    this.getUser = function(u){
        return user;
    }
    this.loggedIn = function(){
        return user ? true:false;
    }
})