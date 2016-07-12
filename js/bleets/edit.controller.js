  "use strict";

  (function(){
    angular
      .module( "bleets" )
      .controller( "BleetEditController", [
        "BleetFactory",
        "$stateParams",
        BleetEditControllerFunction
      ]);

    function BleetEditControllerFunction( BleetFactory, $stateParams ){
      this.bleet = BleetFactory.get({id: $stateParams.id});
      this.update = function(){
        this.bleet.$update({id: $stateParams.id})
      }
    }
  }());
