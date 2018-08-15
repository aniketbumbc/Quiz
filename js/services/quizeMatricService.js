(function(){
    angular.module("turtleFacts").factory("quizMatricService",QuizMatrics);

    QuizMatrics.$inject = ['DataService'];

    function QuizMatrics(DataService){

        var quizObj ={
            quizeActive : false,
            resultActive:false,  
            changeState : changeState,           
            correctAnwsers:[],
            markQuiz:markQuiz,
            numCorrect:0
        };

        return quizObj;

        function changeState (metric,state){

            if(metric === 'quiz'){
                quizObj.quizeActive = state;
            }else if(metric === 'result'){
                quizObj.resultActive = state;
            }else{
                return false;
            }          

        }

        function markQuiz(){
            quizObj.correctAnwsers = DataService.correctAnwsers;
            for(var i=0; i<DataService.quizQuestions.length; i++){
                if(DataService.quizQuestions[i].selected === DataService.correctAnwsers[i]){
                    DataService.quizQuestions[i].correct = true; 
                    quizObj.numCorrect++;
                }else{
                    DataService.quizQuestions[i].correct = false;
                }
            }

        }
    }

})();