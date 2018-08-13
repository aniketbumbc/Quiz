(function () {
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMatricService', 'DataService']; // injecting services 

    function ListController(quizMatricService, DataService) {
        var vm;
        vm = this;
        vm.quizMatricService = quizMatricService;
        vm.name = "App";
        debugger;
        vm.data = DataService.turtlesData; // accessing data from data service
        vm.activeTurtle = {};
        vm.changeActiveTrutle = changeActiveTrutle;
        vm.activateQuiz = activateQuiz;
        vm.search = "";
        // vm.quizeActive = false;   //flag implemented

        function changeActiveTrutle(index) {
            vm.activeTurtle = index;
        }

        function activateQuiz() {
            console.log("Test Method");
            debugger;
            //vm.quizeActive = true;
            quizMatricService.changeState(true);
        }

    }



})();