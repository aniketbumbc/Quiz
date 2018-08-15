(function () {

    angular.module("turtleFacts").controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMatricService', 'DataService'];

    function QuizController(quizMatricService, DataService) {
        var vm = this;
        vm.quizMatricService = quizMatricService; // accessing serive in controller 
        vm.DataService = DataService;
        vm.activeQuestion = 0; // flag set 
        vm.questionAnwsered = questionAnwsered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnwser = selectAnwser;
        vm.error = false; // flag declare for error
        var numQuestionAnwserd = 0;
        vm.finalise = false;
        vm.finaliseAnswers = finaliseAnswers;


        function setActiveQuestion(index) {

            if (index === undefined) {
                var breakOut = false;
                var quizLength = DataService.quizQuestions.length - 1;

                while (!breakOut) {
                    vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0; // check next question if not next question then 0 

                    if (vm.activeQuestion === 0) {
                        vm.error = true;
                    }


                    if (DataService.quizQuestions[vm.activeQuestion].selected === null) {
                        breakOut = true; // found next unanwerd question
                    }
                }
            } else {
                vm.activeQuestion = index;
            }

        }

        function questionAnwsered() {
            var quizLength = DataService.quizQuestions.length;
            // alert("hello");

            if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
                numQuestionAnwserd++;
                if (numQuestionAnwserd >= quizLength) {
                    //finalize quiz
                    for (var i = 0; i < quizLength; i++) {
                        if (DataService.quizQuestions[i].selected === null) {
                            setActiveQuestion(i);
                            return;
                        }
                    }
                    vm.error = false;
                    vm.finalise = true;
                    return;;
                }
            }
            vm.setActiveQuestion();
        }

        function selectAnwser(index) {

            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }


        function finaliseAnswers(){
            vm.finalise = false;
            numQuestionAnwserd = 0;
            vm.activeQuestion = 0;
            quizMatricService.markQuiz();
            quizMatricService.changeState("quiz",false);
            quizMatricService.changeState("result",true);
        }

    }
})();