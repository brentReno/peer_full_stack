(function() {

  'use strict';

  angular
    .module('app')
    .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', 'authService'];

    function loginCtrl($scope, authService) {

      // Put the authService on $scope to access
      // the login method in the view
      $scope.authService = authService;
    }

})();
