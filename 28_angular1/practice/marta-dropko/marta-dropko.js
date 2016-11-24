angular.module('marta.dropko',[])
.directive('martaDropko', function () {
  return {
    scope: {},
    template: '<div style="width:190px; height : 290px; text-align:center; margin:4px 4px; display:block; background-image: url({{img_url}}); background-size: cover; color: #fff; font-weight:bold; font-size: 30px" id = "block1">{{name}} {{surname}}<button  ng-click= "functionEdit()" style = "left:66px;top:210px; background-color: grey ;border: 1 px solid #fff;color: white;padding: 5px 5px; text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;transition-duration: 0.4s;cursor: pointer; border-radius:20%">Edit</button></div>  <div style="width:190px; height : 290px; display:none; background-image: url(http://yusi.com.ua/image/cache/data/oboi/marburg/Padua/56152-200x200.jpg);background-size: cover; margin: 4px 4px;" id = "block2"> <div><label> Name : <input type = "text" ng-model = "name" style = "padding: 5px; margin-top: 30px; margin-left: 15px;border: solid 5px #c9c9c9;box-shadow: inset 0 0 0 1px #707070; transition: box-shadow 0.3s, border 0.3s; width:60%; left:10%"></label><label> Surname : <input type = "text" ng-model ="surname" style = "padding: 5px; margin-top:30px; border: solid 5px #c9c9c9;box-shadow: inset 0 0 0 1px #707070; transition: box-shadow 0.3s, border 0.3s; width:60%"></label></div> <button ng-click= "functionSaveEdit()" style = "position:relative;left:35%;top:100px; background-color: grey ;border: 1 px solid #fff;color: white;padding: 5px 5px; text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;transition-duration: 0.4s;cursor: pointer;" >Save</button></div>',
    controller: function($scope){
      $scope.name = "Marta"
      $scope.surname = "Dropko"
      $scope.img_url = "https://pp.vk.me/c625722/v625722107/52f90/JmpIejyBcc4.jpg"
    	$scope.functionEdit = function() {
       	document.getElementById('block1').style.display = "none";
       	document.getElementById('block2').style.display = "block";
    	}

      $scope.functionSaveEdit = function() {
        document.getElementById('block1').style.display = "block";
        document.getElementById('block2').style.display = "none";
      }
    }
   
  };
});


