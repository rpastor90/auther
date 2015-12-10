app.controller('loginCtrl', function ($scope, authFactory) {
  $scope.login = authFactory.login;
});