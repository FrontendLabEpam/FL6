angular.module('fl', [
  'some.student',
  'roman.mahotsky',
  'pavlo.hibey',
  'oksana.kuzmych',
  'serhiy.pavlov',
  'tetyana.kandybal',
  'andriy.vasylytsya',
  'yura.yarovyj',
  'volodymyr.stakhov',
  'yaroslav.melnyk',
  'volodymyr.harhay',
  'mariana.zadorozhna',
  'andriy.leskiv',
  'marta.dropko',
  'vitalina.kovalchuk',
  // 'rostyslav.skyba'
])
.controller('MainCtrl', function ($scope) {
  $scope.title = 'Epam FE Lab';
  $scope.students = [
      'Roman Mahotsky',
      'Pavlo Hibey',
      'Oksana Kuzmych',
      'Serhiy Pavlov',
      'Tetyana Kandybal',
      'Andriy Vasylytsya',
      'Yura Yarovyj',
      'Volodymyr Stakhov',
      'Yaroslav Melnyk',
      'Volodymyr Harhay',
      'Mariana Zadorozhna',
      'Andriy Leskiv',
      'Marta Dropko',
      'Vitalina Kovalchuk',
      'Rostyslav Skyba'
  ];
});

