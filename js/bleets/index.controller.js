"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetIndexController", [
    "BleetFactory",
    BleetIndexControllerFunction
  ]);

  function BleetIndexControllerFunction(BleetFactory){
    this.bleets = BleetsFactory.query();
    this.newBleet = new BleetFactory();
  }
}());
