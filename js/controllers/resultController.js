(function(){
    angular
    .module("turtleFacts")
    .controller("resultsCtrl", ResultsController);
                
    ResultsController.$inject = ['quizMatricService'];

    function ResultsController(quizMatricService){
  
       var vm = this;
       debugger;
       vm.name = "aniket";
        vm.quizMatricService = quizMatricService;

    }

})();