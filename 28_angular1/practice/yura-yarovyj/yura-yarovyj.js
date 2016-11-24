var app = angular.module('yura.yarovyj',['ngAnimate']);

app.controller('yuretsCtrl', function($scope){
  $scope.name = 'Yura';
  $scope.surname = 'Yarovyj';
  $scope.imgLink = 'https:goo.gl//DRSyff';
  $scope.prevName = 'Yura';
  $scope.prevSurname = 'Yarovyj';
  
  
  $scope.edit = false;
  $scope.profile = true;
  
  $scope.changeVisible = function () {
    $scope.edit = !$scope.edit;
    $scope.profile = !$scope.profile;
  }
  
  $scope.editBtn = function () {
    $scope.changeVisible();
  };
  
  $scope.saveBtn = function () {
    $scope.changeVisible();
    $scope.prevName = $scope.name;
    $scope.prevSurname = $scope.surname;
  };
  
  $scope.cancelBtn = function () {
    $scope.changeVisible();
    $scope.name = $scope.prevName;
    $scope.surname = $scope.prevSurname;
  }
});

app.directive('yuraYarovyj', function () {
  return {
    scope: {},
    template: 
    `<div ng-controller='yuretsCtrl'>
      <img src="{{imgLink}}"/>
      <div ng-show="edit" class="edit">
        <input type="text" value="{{name}}" ng-model="name">
        <input type="text" value="{{surname}}" ng-model="surname">
        <button ng-click="saveBtn()">Save</button>
        <button ng-click="cancelBtn()">Cancel</button>
      </div>
      <div ng-show="profile" class="profile">
        <p>{{name + " " + surname}}</p>
        <button ng-click="editBtn()">Edit</button>
      </div>
    </div>`
  };
});

