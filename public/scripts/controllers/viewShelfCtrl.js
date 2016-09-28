myApp.controller("viewShelfCtrl", ['$scope', '$http', function($scope,$http){
  console.log("In view shelf controller");
  $scope.viewShelf=function(){
    $http({
      method: 'GET',
      url:'/shelf'
    }).then(function(response){
      console.log("back from server with:", response.data);
    });//end http and then
  };//end view shelf
}]);
