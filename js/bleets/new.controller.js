"use strict";

(function(){
  angular
    .module( "bleets" )
    .controller( "BleetNewController", [
      "BleetFactory",
      BleetNewControllerFunction
    ]);

    function BleetNewControllerFunction( BleetFactory ){
      this.bleet = new BleetFactory();
      this.create = function(){
        this.bleet.$save()
      }
    }
}());
