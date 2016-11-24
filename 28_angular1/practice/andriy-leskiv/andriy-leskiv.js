
angular.module('andriy.leskiv', [])
    .directive('andriyLeskiv', function() {
        return {
            scope: {},
            template: '<img src=http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg style="width: 100%; border-radius: 50%; padding: 10px;">' +
                '<p style="text-align: center"ng-hide="showme">{{name}} {{surname}}</p>' +
                '<button style="margin-left: 61px" ng-hide="showme" ng-click="changeName()" >Change</button>' +
                '<div style="text-align: center" ng-show="showme" >' +
                '<input style="margin: 10px" ng-model="name" size="11" ></input>' +
                '<input style="margin: 10px" ng-model="surname" size="11"></input>' +
                '<button style="display: block; margin-left: 80px" ng-click="showme=false">Ok</button>' +
                '</div>',
            controller: function($scope) {
                $scope.name = 'Andriy'
                $scope.surname = 'Leskiv'
            },
            link: function($scope, element, attrs) {
                $scope.changeName = function() {
                    $scope.showme = true
                }
            }
        };
    });
