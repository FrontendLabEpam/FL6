// Code goes here
var nameInput = '<input ng-model="name" ng-show="showme">',
	surnameInput = '<input ng-model="surname" ng-show="showme" value="Melnyk">',
	image = '<img ng-hide="showme" src="https://pp.vk.me/c630817/v630817985/5c022/_NSrW-YTYjE.jpg">',
	showInfo = '<p ng-init="name=\'Yaroslav\'; surname=\'Melnyk\'" ng-hide="showme"><b> {{name}} {{surname}}</b></p>',
	editButton = '<button ng-click="showme=true" ng-show="!showme">Edit</button>',
	saveButton = '<button ng-show="showme" ng-click="showme=false">Save</button>';

angular.module('yaroslav.melnyk', [])
	.directive('yaroslavMelnyk', function() {
		return {
			scope: {},
			template: nameInput + surnameInput + image + showInfo + editButton + saveButton
		};
	});