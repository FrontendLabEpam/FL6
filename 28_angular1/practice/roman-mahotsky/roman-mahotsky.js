angular.module('roman.mahotsky',[])
.directive('romanMahotsky', function () {
  return {
    scope: {},
    templateUrl: 'roman-mahotsky/profile.html',
    restrict: 'E',
    controller: function($scope, $element) {
    	// init state
    	$scope.showProfile = true;
    	$scope.settingsIsOpen = false;
    	
    	$scope.student = {
    		firstName: 'Roman',
    		lastName: 'Mahotskyi'
    	}

    	$scope.settings = {
    		firstName: $scope.student.firstName,
    		lastName: $scope.student.lastName
    	}

    	$scope.openProfile = function() {
	    	$scope.showProfile = true;
	    	$scope.settingsIsOpen = false;
    	}

    	$scope.openSettings = function() {
    		$scope.showProfile = false;
	    	$scope.settingsIsOpen = true;
    	}

    	$scope.closeSettings = function() {
    		$scope.settings.firstName = $scope.student.firstName;
    		$scope.settings.lastName = $scope.student.lastName;
    		$scope.openProfile();
    	}

    	$scope.saveSettings = function() {
    		$scope.student.firstName = $scope.settings.firstName;
    		$scope.student.lastName = $scope.settings.lastName;
    		$scope.openProfile();
    	}
    }
  };
});