angular.module('andriy.vasylytsya',[])
.directive('andriyVasylytsya', function () {
  return {
    // scope: false,
    scope: {},
    restrict: 'E',
    template: '<div class="inner-div preview" ng-show="editable == false"> <p>{{ name }}</p> <p>{{ surname }}</p> <img src= "{{ img }}"> <button id="edit">Edit</button> </div>' +
    '<div class="inner-div edit" ng-show="editable == true"> <p>Edit user settings:</p> <input id="name" value="Andrew" maxlength="30" type="text" placeholder="name"> <br><br> <input id="surname" value="Vasylytsya" maxlength="30" type="text" placeholder="surname"> <button id="save">Save</button> </div>',
    transclude: false,
    controller: function($scope) {
      $scope.name = 'Andrew';
      $scope.surname = 'Vasylytsya';
      $scope.img = "https://pp.vk.me/c622124/v622124144/1669e/GE_0W7z7M7Q.jpg";
      $scope.editable = false;

      $scope.changeState = function() {
        $scope.editable = true;
        $scope.$apply();
      }

      $scope.saveChanges = function(elem) {
        var name = document.querySelector('.andriy-vasylytsya #name');
        var surname = document.querySelector('.andriy-vasylytsya #surname');

        if ( name.value.length > 0 && surname.value.length > 0 ) {
            $scope.name = name.value;
            $scope.surname = surname.value;
            $scope.editable = false;
            $scope.$apply();
        }
        else {
            alert("Input fields must not be empty!");
            return false;
        }
      }
    },

    link: function( scope, elem, controller ) {
    // Click on edit button:
    var editable = document.querySelector('.andriy-vasylytsya #edit');
    editable.onclick = function () {
        scope.changeState();
    };

    var saving = document.querySelector('.andriy-vasylytsya #save');
    saving.onclick = function () {
        scope.saveChanges(elem);
    };

    // CSS STYLES:
    elem.children().attr('style','width: 100%; height: 100%; position: relative; text-align: center; padding: 20px 10px 0px; background: #28272D; color: white; font-family: Verdana;');
    elem.find('button').attr('style','position: absolute; bottom: 15px; left: 50%; width: 125px; margin-left: -62.5px; text-align: center; border-radius: 3px !important; background: #72d5ff; color: #fff; border: 1px solid rgba(225, 224, 229, 0); box-shadow: 0px 4px 0px 0px rgba(234, 249, 255, 0.12); font-size: 15px; font-weight: 400; outline: none; padding: 4px 15px; cursor: pointer; transition: all 0.3s ease;');
    $(elem).find('button').mouseover(function() {
        $(this).css('box-shadow','0px 4px 0px 0px white');
    });
    $(elem).find('button').mouseleave(function() {
        $(this).css('box-shadow','0px 4px 0px 0px rgba(234, 249, 255, 0.12)');
    });
    elem.find('img').css({'width':'125px', 'height':'125px','border-radius':'100%','border': '1px solid rgba(255, 255, 255, 0.25);'});
    elem.find('input').attr('style','width: 100%; border-radius: 3px; padding: 4px 4px 4px 4px; background: white; border: 1px solid #dfe6ec; font-size: 15px; height: auto; box-shadow: none;color: #504c62; font-weight: 300; outline: none;');
    }
  };
});
