(function(){
    angular.module("turtleFacts").factory("quizMatricService",QuizMatrics);

    function QuizMatrics(){

        var quizObj ={
            quizeActive : false,  
            changeState : changeState
        };

        return quizObj;

        function changeState (state){
            quizObj.quizeActive = state;

        }
    }

})();