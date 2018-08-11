(function(){

angular.module("turtleFacts").controller("quizCtrl",QuizController);

QuizController.$inject = ['quizMatricService' ,'DataService'];

function QuizController(quizMatricService,DataService){
    var vm = this;
    vm.quizMatricService = quizMatricService;  // accessing serive in controller 
    vm.DataService = DataService;
    vm.activeQuestion = 0; // flag set 
    vm.questionAnwsered = questionAnwsered;

    function questionAnwsered(){
        alert("hello");
    }

}




})();