'use strict';

var app = angular.module('babysittingapp');

app.controller('homeCtrl', function($scope, $http, $log) {

  $scope.takepicture = function() {

    $http.post('/api/ocs').then(res => {
      console.log('res.data.id', res.data.id);

      var id = res.data.id;
        $http.post('/api/ocs/Path/' + id).then(resPath => {

          // var url = resPath.config.url;
          console.log('res.data 222222', resPath.data.results.fileUrl);

          var url = resPath.data.results.fileUrl;

          console.log('url', url);

          $scope.image = "http://192.168.43.1:6624/" + url;

          // console.log('$scope.image', $scope.image);

          // $http.post('/api/ocs/Pictures').then(res => {
          //   $scope.image = "http://192.168.43.1:6624/media/e/DCIM/Camera/20160716_100953.jpg";
          // });


      })

    })


    // call router

  }
})
