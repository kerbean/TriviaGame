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
    });

    $(".button-choices").on("click", function () {
        console.log("b:button-choices - START");
        switch ($(this).attr('id')) {
            case "choice1":
                choiceComputer($(this).val(), $(this).attr('answer'));
            case "choice2":
                choiceComputer($(this).val(), $(this).attr('answer'));
            case "choice3":
                choiceComputer($(this).val(), $(this).attr('answer'));
            case "choice4":
                choiceComputer($(this).val(), $(this).attr('answer'));
        }
    });

    function showAnswer() {
        console.log("f:showAnswer - START");
        $(".trivia-questions").css("display", "none");
        $(".show-answers").css("display", "initial");
    }

    function updateScore() {

    }

    function choiceComputer(choice, answer) {
        console.log("f:choiceComputer - START");
        showAnswer();
        if (choice == answer) {
            $("#right-wrong").text("YOU ARE CORRECT!!!");
        }
        else {
            $("#right-wrong").text("YOU ALMOST HAD IT!!!");
            $("#correct-answer").text("THE CORRECT ANSWER IS " + answer);
        }
    }

    // function isCorrect(choice, answer) {
    //     return choice == answer;
    // }

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
            // console.log("y = " + y);
            // console.log("choices y-1 = " + choices[y - 1]);
            // console.log("questions 0 y = " + questions[0][y]);
            $(choices[y - 1]).text(questions[0][y]);
            $(choices[y - 1]).attr("value", questions[0][y]);
            $(choices[y - 1]).attr("answer", questions[0][5]);
            console.log("value: " + $(choices[y - 1]).val());
            console.log("answer: " + $(choices[y - 1]).attr("answer"));
        }
        // }


        console.log("f:fillChoices - END");
    }



});