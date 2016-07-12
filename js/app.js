"use strict"

(function(){
  angular
  .module("blitter", [
    "ui.router",
    "bleets"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("bleetIndex", {
      url: "/bleets",
      templateUrl: "js/bleets/index.html",
      controller: "BleetIndexController",
      controllerAs: "BleetIndexViewModel"
    })
    .state("bleetNew", {
      url: "/bleets/new",
      templateUrl: "js/bleets/new.html",
      controller: "NewController",
      controllerAs: "BleetNewViewModel"
    })
    .state("bleetEdit", {
      url: "/bleets/edit",
      templateUrl: "js/bleets/edit.html",
      controller: "BleetEditController",
      controllerAs: "BleetNewEditModel"
    })
    .state("bleetshow", {
      url: "/bleets/:id",
      templateUrl: "js/bleets/show.html",
      controller: "BleetShowController",
      controllerAs: "BleetShowViewModel"
    });
  }
}());







$stateProvider.state('contacts', {
  template: '<h1>My Contacts</h1>'
})

})
