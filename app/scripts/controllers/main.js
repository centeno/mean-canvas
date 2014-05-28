'use strict';

angular.module('meanCanvasApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http
      .get('/api/canvas').success(function(canvas) {
        $scope.canvas = canvas;
      })
  });
