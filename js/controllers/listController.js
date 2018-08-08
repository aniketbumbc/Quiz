(function () {
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);

    function ListController() {
        var vm;
        vm = this;
        vm.name = "App";
        vm.data = turtlesData;

    }

    var turtlesData = [
        {
            type:"Green Turtle",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        },
        {
            type:"Green Turtle 1",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        },
        {
            type:"Green Turtle 2",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        },{
            type:"Green Turtle 3",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        },{
            type:"Green Turtle 4",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        },{
            type:"Green Turtle 5",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        },{
            type:"Green Turtle 6",
            location:"Tropical and subtropical",
            size:"Upto 1.5m to 300kg",
            lifespan:"Over 80 years",
            diet:"veg",
            desscription:"Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."
            
        }
    ]

})();