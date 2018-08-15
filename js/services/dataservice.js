(function () {
    angular.module("turtleFacts").
    factory("DataService", DataFactory);

    function DataFactory() {
        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnwsers:correctAnwsers
        };

        return dataObj;
    }

    var correctAnwsers = [1,2,3,0,3,3,2,1,0];

    var quizQuestions = [{
            type: "text",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "text",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "image",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "text",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "image",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "text",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "text",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "image",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        },
        {
            type: "text",
            text: "How much weight ?",
            PossibleAnwers: [{
                    answer: " Upt to 20Kg"
                },
                {
                    answer: " Upt to 30Kg"
                },
                {
                    answer: " Upt to 40Kg"
                },
                {
                    answer: " Upt to 10Kg"
                },
            ],
            selected: null,
            corrected: null
        }
    ]

    var turtlesData = [{
            type: "Green Turtle",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        },
        {
            type: "Areen Turtle 1",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        },
        {
            type: "Breen Turtle 2",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        }, {
            type: "Zreen Turtle 3",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        }, {
            type: "Xreen Turtle 4",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        }, {
            type: "Hreen Turtle 5",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        }, {
            type: "Kreen Turtle 6",
            location: "Tropical and subtropical",
            size: "Upto 1.5m to 300kg",
            lifespan: "Over 80 years",
            diet: "veg",
            description: "Turtles are reptiles that have been around for more than 200 million years. In fact, fossils from the dinosaur age show that turtles today look pretty much the same as they did way back then."

        }
    ]
})();