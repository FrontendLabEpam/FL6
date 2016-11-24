angular.module('oksana.kuzmych', [])
  .directive('oksanaKuzmych', function () {
    return {
      scope: {},
      controller: function ($scope) {
        $scope.name = 'Oksana Kuzmych';
        $scope.url = 'http://justcuteanimals.com/wp-content/uploads/2014/10/baby-racoon-pictures-cute-animals-pics.jpg';
      },
      template: '<div class="info" style="text-align:center"><img id="photo_view" style="max-width:100%" src="{{url}}" /><h1 id="name_view">{{name}}</h1><button id="edit" type="button">edit</button></div>'
      + '<div class="change_info" style="display:none; padding: 30px 15px"><label>Change Name:<input id="student_name" type="text" style="margin: 15px; width:calc(100% - 30px)"></label><label>Change Photo:<input id="student_photo" type="file" style="max-width:100%; margin: 15px 0"></label><button id="save" type="submit" style="margin: 0 auto; display:block">save</div>',
      link: function (scope, iElement, iAttrs, controller) {
        document.querySelector('.oksana-kuzmych #edit').onclick = function () {
          document.querySelectorAll('.oksana-kuzmych .info')[0].style.display = 'none';
          document.querySelectorAll('.oksana-kuzmych .change_info')[0].style.display = 'block';
        }
        function readURL(input) {
          if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
              document.querySelector('.oksana-kuzmych #photo_view').src = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
          }
        }
        student_photo.addEventListener('change', function () {
          console.log('change')
          readURL(this);
        });
        document.querySelector('.oksana-kuzmych #save').onclick = function () {
          document.querySelector('.oksana-kuzmych #name_view').innerHTML = document.querySelector('.oksana-kuzmych #student_name').value;
          document.querySelectorAll('.oksana-kuzmych .info')[0].style.display = 'block';
          document.querySelectorAll('.oksana-kuzmych .change_info')[0].style.display = 'none';
        }
      }
    };
  });