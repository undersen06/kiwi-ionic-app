"use strict";

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller("WelcomeController", ["$scope", "$state","$ionicPlatform","$Regions","RegionsModel",
  function($scope, $state,$ionicPlatform,$Regions,RegionsModel) {
    $ionicPlatform.ready(function() {

    $scope.goToSignUp = function(){
      debugger;
      $state.go("signup");
    }


    });
  }]);
}).call(this);
