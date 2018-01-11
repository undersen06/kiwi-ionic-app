"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("BaseController", ["$scope", "$state","$ionicPlatform",
  function($scope, $state,$ionicPlatform) {

    $ionicPlatform.ready(function() {

      $state.go("introduction");

    });
  }]);
}).call(this);
