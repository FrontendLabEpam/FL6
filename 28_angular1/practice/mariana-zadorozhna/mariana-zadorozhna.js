angular.module('mariana.zadorozhna',[])
.directive('marianaZadorozhna', function () {
  return {
    scope: {},
    template: '<div class="container"><div id="input-div"><p>You can change name here: </p><input type="text" ng-model="name"><input type="text" ng-model="surname"><button ng-click="saveInput()">save</button></div><div id="profile-div"><p>{{ name }} {{ surname }}</p><button ng-click="openInput()">edit</button></div></div>',
    controller: function ($scope){
      var profile = document.getElementById("profile-div");
      var input = document.getElementById("input-div");

      $scope.name = "Mariana";
      $scope.surname = "Zadorozhna";
      $scope.openInput = function (){
          //profile.style.display = "none";
          input.style.left = "0px";
          profile.style.opacity = "0";
      }
      $scope.saveInput = function (){
        //profile.style.display = "block";
        //input.style.display = "none";
        input.style.left = "-200px";
          profile.style.opacity = "1";
      }
    }
}
});
