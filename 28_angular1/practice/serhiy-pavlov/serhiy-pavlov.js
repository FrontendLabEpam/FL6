angular.module('serhiy.pavlov',[])
.directive('serhiyPavlov', function () {
  return {
    scope: {},
    templateUrl: 'serhiy-pavlov/serhiy-pavlov.html',
     controller: function($scope) {

      $scope.name = 'Serhiy';
      $scope.surname ='Pavlov';
      $scope.edit = false;

      $scope.change = function() {
        $scope.edit = !$scope.edit;
      };

     }
  };
});
