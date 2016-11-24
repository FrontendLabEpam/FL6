angular.module('pavlo.hibey',[])
.controller('pavloHibeyCtrl', ['$scope', function($scope) {
    $scope.firstName = 'Pavlo';
    $scope.lastName = 'Hibey';
    $scope.imgUrl = 'http://i.imgur.com/wngQWl4.jpg'
    $scope.editMode = false;
    $scope.editButtonTitle = $scope.editMode ? 'Save' : 'Edit';
}])
.directive('pavloHibey', function () {
  return {
    templateUrl: 'pavlo-hibey/pavlo-hibey.html',
    controller: 'pavloHibeyCtrl',
    link: function(scope, element) {
      element.on('click', function(e) {
        e.preventDefault();
        
        if (/edit-button/g.test(e.target.className)) {
          if (scope.firstName && scope.lastName) {
            scope.editMode = !scope.editMode;
            scope.editButtonTitle = scope.editMode ? 'Save' : 'Edit';
            
            return scope.$apply();
          }        
          
          alert('Fill in first and last name!')  ;
        }
      });
    }
  };
});