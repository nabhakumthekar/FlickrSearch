'use strict';

angular.module('flickrSearchApp',['ngMaterial'])
  .controller('FlickrsearchCtrl', function ($http,$scope) {
    $scope.getSearchData = function(tagQuery){
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+tagQuery+"&tagmode=any&format=json&jsoncallback=JSON_CALLBACK";
    $http.jsonp(url).
    success(function(data) {
      $scope.items = data.items
    }).
    error(function (data) {
      $scope.items = "Request failed";
       console.log($scope.items);
    });
    };
  });
