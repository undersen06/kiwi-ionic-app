'use strict';
/*
=========================================
ROUTES CONFIGURATION
=========================================
*/

(function() {
  this.app.config(function($stateProvider, $urlRouterProvider, $httpProvider,$ionicConfigProvider) {


    // $ionicConfigProvider.navBar.alignTitle('center');
    // $ionicConfigProvider.tabs.position('bottom');
    //
    // $ionicConfigProvider.platform.android.scrolling.jsScrolling(false);
    // $ionicConfigProvider.views.transition('none');
    // $ionicConfigProvider.views.swipeBackEnabled(false);

        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.backButton.previousTitleText(true).text('&emsp;&emsp;');
        $ionicConfigProvider.scrolling.jsScrolling(false);
        $ionicConfigProvider.platform.android.scrolling.jsScrolling(false);

        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.views.transition('none');


    // $stateProvider

    $stateProvider
      .state("/", {
        url: "/",
        cache: false,
        abstract: false,
        controller: "BaseController"
      })

      .state("introduction", {
        url: "/introduction",
        cache: false,
        abstract: false,
        templateUrl: "./js/views/introduction/introduction.html",
        controller: "IntroductionController"
      })

      .state("welcome", {
        url: "/welcome",
        cache: false,
        abstract: false,
        templateUrl: "./js/views/welcome/welcome.html",
        controller: "WelcomeController"
      })

      .state("sigin", {
        url: "/sigin",
        cache: false,
        abstract: false,
        templateUrl: "./js/views/signin/signin.html",
        controller: "SiginController"
      })

      .state("signup", {
        url: "/signup",
        cache: false,
        abstract: false,
        templateUrl: "./js/views/signup/signup.html",
        controller: "SignUpController"
      })

      $urlRouterProvider.otherwise('/');

  });
}).call(this);
