$(document).ready(function () {
    // var questions = {
    //     1: {
    //         Question: "Who is the current president of USA?",
    //         Answer: "Trump",
    //         Choices: ["Trump", "Clinton", "Obama", "Jupiter"]
    //     }
    // }
    var questions = [
        ["Who is the current president of USA?", "Trump", "Clinton", "Obama", "Jupiter", "Trump"]
    ];

    var choices = ["#choice1", "#choice2", "#choice3", "#choice4"];

    $("#start-button").on("click", function () {
        $("#start-button").css("display", "none");
        $(".trivia-questions").css("display", "initial");
        updateTriviaBox();
    })

    function updateTriviaBox() {
        console.log("f:updateTriviaBox - START");
        fillQuestions();
        fillChoices();
    }

    function fillQuestions() {
        console.log("f:fillQuestions - START");
        $("#question").text(questions[0][0]);
    }

    function fillChoices() {
        console.log("f:fillChoices - START");
        // for (x in questions.length) {
        for (y = 1; y < 5; y++) {
            console.log("y = " + y);
            console.log("choices y-1 = " + choices[y - 1]);
            console.log("questions 0 y = " + questions[0][y]);
            $(choices[y - 1]).text(questions[0][y]);
        }
        // }

        // for (x = 0; x < 2; x++) {
        //     let div = $("<div>");
        //     div.addClass("col-mg-6 pd-5 mg-5");
        //     div.text(questions[1].Choices[x])
        //     $(".row1").append(div);
        //     console.log($(".row1"));
        // }
        // for (x = 2; x < 4; x++) {
        //     let div = $("<p>");
        //     div.addClass("col-mg-6");
        //     div.text(questions[1].Choices[x])
        //     $(".row2").append(div);
        // }
        console.log("f:fillChoices - END");
    }



});