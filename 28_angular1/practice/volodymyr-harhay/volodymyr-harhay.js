angular.module('volodymyr.harhay',[])
.directive('volodymyrHarhay', function () {
  return {
    scope: {},
    template: '<div class="cl_wrap"><div class = "cl_view_edit"> <div><input type="text" ng-model="name" id="id_edit_name"><label for="id_edit_name">edit name</label></div> <div><input type="text" ng-model="sur_name" id="id_edit_sur_name"><label for="id_edit_sur_name">edit surname</label></div><input type="button" value="save" class="cl_btn_save" ng-click="eventSave()"></div><div class="cl_view_normal"><div class ="cl_name">{{name}}</div><div class ="cl_surname">{{sur_name}}</div><input type="button" value="edit" class="cl_btn_edit" ng-click="eventEdit()"></div></div>',
    controller: function($scope) {
        $scope.name = "Volodymyr";
        $scope.sur_name = "Harhay";
        var card = document.getElementsByClassName("cl_wrap")[0];
        var view_normal = document.getElementsByClassName("cl_view_normal")[0];
        var view_edit = document.getElementsByClassName("cl_view_edit")[0];
        view_edit.style.visibility = "hidden";
        $scope.eventEdit = function () {
            view_edit.style.visibility = "visible";
            view_edit.style.opacity = "1";
            view_normal.style.visibility = "hidden";
            view_normal.style.opacity = "0";
            card.style.background = "url(volodymyr-harhay/photo2.jpg)";
            card.style.backgroundSize = "cover";
        }
         $scope.eventSave = function () {
            view_edit.style.visibility = "hidden";
            view_edit.style.opacity = "0";
            view_normal.style.visibility = "visible";
            view_normal.style.opacity = "1";
            card.style.background = "url(volodymyr-harhay/photo.jpg)";
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "center";
        }
      }   
  }
});