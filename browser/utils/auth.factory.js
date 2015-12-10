app.factory('authFactory', function ($http, User, $state) {
  var authFactory = {};

  var currentUser = null; 

  function setCurrentUser(res){
    currentUser = res.data; 
    console.log('my current user: ', currentUser)
    return currentUser; 
  }

  authFactory.loggedin = false;
  authFactory.signup = function (email, password) {
    return $http.post('/api/login/new', {email: email, password: password})
       .then(setCurrentUser)
      .then(function(){
        $state.go('home');
      })
      .then(null, console.error.bind(console));
  };
  authFactory.login = function (email, password) {
    return $http.post('/api/login/', { email: email, password: password})
      .then(setCurrentUser)
      .then(function(){
        $state.go('home');
      })
      .then(null, console.error.bind(console));
  };

  authFactory.logout = function () {
    console.log("trying to logout")
    return $http.delete('/api/login/logout')
      .then(setCurrentUser)
      .then(function(){
        $state.go('login');
      })
      .then(null, console.error.bind(console));
  };

  authFactory.getCurrentUser = function () {
    return currentUser; 
  };

  authFactory.refreshUser = function () {
    return $http.get('/api/users/me')
      .then(setCurrentUser);
  };


  return authFactory;
});