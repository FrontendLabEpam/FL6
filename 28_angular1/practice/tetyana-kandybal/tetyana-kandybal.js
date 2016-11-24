angular.module('tetyana.kandybal',[])
.directive('tetyanaKandybal', function () {
  return {
    scope: {},
    template: '<div id="card"> <p>{{name}}</p> <p>{{surname}}</p><img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p160x160/10344839_1560249530878587_7317923514050328364_n.jpg?oh=735d91d9ee475fea3ce59c194e444774&oe=588481F7"> <button ng-click="open()" id="btn">Edit</button> </div> <div style="display:none" id="target"> <input type="text" class="text" ng-model="name"/> <input class="text" type="text" ng-model="surname"/> <button ng-click="close()" id="btn-save">Save</button></div>',
  	restrict: 'E',
    controller: function($scope)
    {},
    link: function (scope)
  	{
  		var block = document.getElementById('target');
  		var btn = document.getElementById('btn');
  		var card = document.getElementById('card');
  		scope.name = 'Tetyana';
  		scope.surname = 'Kandybal';

   		scope.open = function ()
  		{
  			block.style.display = 'block';
  			btn.style.display = 'none';
  			card.style.display = 'none';
  		};

  		scope.close = function ()
  		{
  			block.style.display = 'none';
  			btn.style.display = 'block';
  			card.style.display = 'block';
  		};
  	}
  };
});
