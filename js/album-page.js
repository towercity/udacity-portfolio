(function(){
  var app = angular.module('album-page', []);

  app.controller('page-data', ['$http', function($http) {
    var self = this;
    self.playlist = {};

    $http.get('json/playlist.json').success(function(data) {
      self.playlist = data;
    });
  }]);
})();