(function () {
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);

    function ListController() {
        var vm;
        vm = this;
        vm.name = "App";

    }

})();