(function(){

angular.module("turtleFacts").controller("quizCtrl",QuizController);

QuizController.$inject = ['quizMatricService' ,'DataService'];

function QuizController(quizMatricService,DataService){
    var vm = this;
    vm.quizMatricService = quizMatricService;  // accessing serive in controller 
    vm.DataService = DataService;

}




})();