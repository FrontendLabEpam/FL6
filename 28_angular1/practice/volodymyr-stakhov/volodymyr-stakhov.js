angular.module('volodymyr.stakhov',[])
.directive('volodymyrStakhov', function () {
  return {
    scope: {},
    replace: false,
    template: '<img src={{img}} width="120px" height="120px">' + 
              '<h3 ng-show="show">{{firstName}} {{secondName}}</h3>' +            
              '<div ng-show="!show" class= "data-fields"><input id="name" type="text" value={{firstName}}><input id="sername" type="text" value={{secondName}}></div>' +
              '<button >{{btn}}</button>',
   
   
     link: function(scope, element) {
      scope.show = true;
      scope.btn = 'EDIT'
      scope.img = "volodymyr-stakhov/vs.png";
      scope.firstName = "Volodymyr";
      scope.secondName = "Stakhov";
      element.on('click', function(e) {
        e.preventDefault();       
        if(e.target.tagName == 'BUTTON') {
          scope.show= !scope.show;
          scope.show == true ? scope.btn = 'EDIT' : scope.btn = 'SAVE';
          var name = document.getElementById('name').value;
          var sername = document.getElementById('sername').value;
          scope.firstName = name;
          scope.secondName = sername;
          return scope.$apply();
        }
      })
     }
  };
});
