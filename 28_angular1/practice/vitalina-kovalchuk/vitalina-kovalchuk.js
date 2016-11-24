var app = angular.module('vitalina.kovalchuk', []);
app.controller("vitalinaKovalchukCtrl", function($scope) {

    $scope.name = "Vitalina";

    $scope.surname = "Kovalchuk";

    $scope.save = "save";

    $scope.edit = "edit";

    $scope.editor = false;


    $scope.editorClick = function() {

        $scope.editor = true;

        $scope.editorTitleOne = $scope.name;

        $scope.editorTitleTwo = $scope.surname;

    };

    $scope.saveEditor = function() {

        $scope.editor = false;

        $scope.name = $scope.editorTitleOne;

        $scope.surname = $scope.editorTitleTwo;

    };

});


app.directive('vitalinaKovalchuk', function() {

    return {
        controller: 'vitalinaKovalchukCtrl',

        template:

        '<div ng-hide="editor" class="data">' +

        '<div>' +

        '<span>{{ name }}</span> ' +

        '<span>{{ surname }}</span>' +

        '</div>' +

        '<button ng-click="editorClick()">{{edit}}</button>' +

        '</div>' +

        '<div ng-show="editor" class="data-2">' +

        '<input ng-model="editorTitleOne" ng-show="editor">' +

        '<input ng-model="editorTitleTwo" ng-show="editor">' +

        '<button ng-click="saveEditor()" class="btn-save">{{save}}</button>' +

        '</div>'

    };

});


app.directive('backImg', function() {

    return function(scope, element, attrs) {

        var link = attrs.backImg;

        element.css({

            'background-size': 'cover',

            'background-image': 'url(' + link + ')'

        });

    };

});