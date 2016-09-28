myApp.controller("addObjectCtrl", ['$scope', '$http', function($scope, $http){
  console.log("In add object controller");
  $scope.addShelfObject = function () {
// assemble object to send
var newShelfObject = {
  description: $scope.description,
  placer: $scope.placer,
  image: $scope.image
}
$http({
  type: 'POST',
  url: '/shelf',
  data: newShelfObject
}).then( function (response){
      console.log('http post success:', response);
    }, function (error) {
      console.log('error in post;', error);
    }); // end then function
  }; // end addShelfObject
}]); // end addObjectCtrl controller
