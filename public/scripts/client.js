// Establish app
var myApp = angular.module("myApp",["ngRoute"]);

// set routes
myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home",{
      templateUrl:"../views/partials/home.html",
      controller: "homeCtrl"
    }).
    when("/add",{
      templateUrl:"../views/partials/addObject.html",
      controller: "addObjectCtrl"
    }).
    when("/view",{
      templateUrl:"../views/partials/viewShelf.html",
      controller:"viewShelfCtrl"
    }).
    otherwise({
      redirectTo:"home"
    });//end route provider config
}]);// end set routes
