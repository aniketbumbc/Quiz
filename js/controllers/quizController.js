(function(){

angular.module("turtleFacts").controller("quizCtrl",QuizController);

QuizController.$inject = ['quizMatricService' ,'DataService'];

function QuizController(quizMatricService,DataService){
    var vm = this;
    vm.quizMatricService = quizMatricService;  // accessing serive in controller 
    vm.DataService = DataService;
    vm.activeQuestion = 0; // flag set 
    vm.questionAnwsered = questionAnwsered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.selectAnwser= selectAnwser;

    var numQuestionAnwserd = 0;


    function setActiveQuestion(){
        var breakOut = false;
        var quizLength = DataService.quizQuestions.length-1;

        while(!breakOut){ 
            vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion:0;  // check next question if not next question then 0 
        if(DataService.quizQuestions[vm.activeQuestion].selected === null){
            breakOut = true; // found next unanwerd question
        }
        }
      
    }

    function questionAnwsered(){
        var quizLength = DataService.quizQuestions.length;
       // alert("hello");

        if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
            numQuestionAnwserd++;
            if(numQuestionAnwserd >= quizLength){
                  //finalize quiz

            }           
          }
          vm.setActiveQuestion();
    }
    
    function selectAnwser(index){

        DataService.quizQuestions[vm.activeQuestion].selected = index;
    }

}
})();