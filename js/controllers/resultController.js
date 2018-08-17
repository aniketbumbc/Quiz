(function(){
    angular
    .module("turtleFacts")
    .controller("resultsCtrl", ResultsController);
                
    ResultsController.$inject = ['quizMatricService','DataService'];

    function ResultsController(quizMatricService,DataService){
  
       var vm = this;
  
       vm.name = "aniket";
        vm.quizMatricService = quizMatricService;
        vm.DataService = DataService;       
        vm.getAnwersClass = getAnwersClass;
        vm.setActiveQuestion = setActiveQuestion;
        vm.calculatePercentage = calculatePercentage;
        vm.activeQuestion = 0;

        function setActiveQuestion(index){
            vm.activeQuestion = index; 

        }

        function calculatePercentage(){
            debugger;          
            return Math.round(quizMatricService.numCorrect / DataService.quizQuestions.length * 100);
        }      

            




        function  getAnwersClass(index){    // ng- class implemention

            if(index == quizMatricService.correctAnwsers[vm.activeQuestion]){
                return "bg-success";
            }else if(index == DataService.quizQuestions[vm.activeQuestion].selected){
                return "bg-danger";
                
            }
        }
    }

})();