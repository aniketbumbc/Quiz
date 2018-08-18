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
        vm.backButton= backButton;
        vm.activeQuestion = 0;

        function setActiveQuestion(index){
            vm.activeQuestion = index; 

        }

        function calculatePercentage(){
            debugger;          
            return Math.round(quizMatricService.numCorrect / DataService.quizQuestions.length * 100);
        }      

        function backButton(){
         quizMatricService.changeState("result",false);
         quizMatricService.numCorrect = 0;
         for(var i=0;i<=DataService.quizQuestions.length;i++){
             var data = DataService.quizQuestions[i];
             data.selected = null;
             data.correctAnwsers = null;
         }

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