app.factory('authFactory', function ($http, User) {
  var authFactory = {};
  authFactory.signup = function (email, password) {
    return $http.post('/api/users', {email: email, password: password})
      .then(function (response) {
        console.log(response);
      }).then(null, console.error.bind(console));
  };
  authFactory.login = function (email, password) {
    // console.log(User);
    var thisUser = User.fetch({email: email, password: password});
    console.log(thisUser);
  //   $http.get('/api/users')
  //     .then(function (response) {
  //       console.log(response.data.find({email: email, password: password}));
  //     }).then(null, console.error.bind(console));
  };
  return authFactory;
});