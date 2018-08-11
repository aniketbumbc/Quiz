(function(){

angular.module("turtleFacts").controller("quizCtrl",QuizController);

QuizController.$inject = ['quizMatricService'];

function QuizController(quizMatricService){
    var vm = this;
    vm.quizMatricService = quizMatricService;  // accessing serive in controller 

}




})();