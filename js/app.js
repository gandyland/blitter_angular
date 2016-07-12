$(document).ready(function(){

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

  var blitter = angular.module('blitter', ['ngResource', 'ngRoute']);

  // Some APIs expect a PUT request in the format URL/object/ID
  // Here we are creating an 'update' method
  blitter.factory('Notes', ['$resource', function($resource) {
  return $resource('/notes/:id', null,
      {
          'update': { method:'PUT' }
      });
  }]);

  // In our controller we get the ID from the URL using ngRoute and $routeParams
  // We pass in $routeParams and our Notes factory along with $scope
  blitter.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                     function($scope, $routeParams, Notes) {
  // First get a note object from the factory
  var note = Notes.get({ id:$routeParams.id });
  $id = note.id;

  // Now call update passing in the ID first then the object you are updating
  Notes.update({ id:$id }, note);

  // This will PUT /notes/ID with the note object in the request payload
  }]);




var url = 'http://api.giphy.com/v1/gifs/search?q=';
var apiKey = '&api_key=dc6zaTOxFJmzC';
 var search = $('.destination').val();


 $.ajax({
   url: url+search+apiKey,
   type: "PUT",
   dataType: "json"
 }).success(function(response){
   console.log(response);
   images = '';
   for (var i=0;i<response.data.length;i++) {
     var images = images + '<img src="' + response.data[i].images.downsized_large.url + '" >';
   }

     $('.output').html(images);
 }).fail(function(response){
   console.log("sucks for you", response);
 });
});

"use strict"


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
