'use strict';

angular.module('meanCanvasApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
