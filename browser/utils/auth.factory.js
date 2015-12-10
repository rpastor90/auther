app.factory('authFactory', function ($http, User, $state) {
  var authFactory = {};
  authFactory.signup = function (email, password) {
    return $http.post('/api/login/new', {email: email, password: password})
       .then(function (response) {
          console.log("returned res user:", response.data)
          $state.go('home');
      }).then(null, console.error.bind(console));
  };
  authFactory.login = function (email, password) {
    return $http.post('/api/login/', { email: email, password: password})
      .then(function (response) {
        console.log("returned res:", response)
        $state.go('home');
      }).then(null, console.error.bind(console));
  };

  authFactory.logout = function () {
    console.log("trying to logout")
    return $http.delete('/api/login/logout')
      .then(function (response) {
        console.log("returned delete res:", response)
        $state.go('login');
      }).then(null, console.error.bind(console));
  };
  return authFactory;
});