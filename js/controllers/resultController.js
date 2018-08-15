(function(){
    angular
    .module("turtleFacts")
    .controller("resultsCtrl", ResultsController);
                
    ResultsController.$inject = ['quizMatricService','DataService'];

    function ResultsController(quizMatricService,DataService){
  
       var vm = this;
       debugger;
       vm.name = "aniket";
        vm.quizMatricService = quizMatricService;
        vm.DataService = DataService;

    }

})();