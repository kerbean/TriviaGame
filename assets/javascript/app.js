$(document).ready(function () {

    var questionNo = 1;
    var questionAlive = 0;
    var ctrCorrect = 0;
    var ctrWrong = 0;
    var ctrUn = 0;

    // var questions = [
    //     ["Who is the current president of USA?", "Trump", "Clinton", "Obama", "Jupiter", "Trump"],
    //     ["1+1?", "1", "2", "3", "Magellan", "Magellan"],
    //     ["Who is sleeping?", "You", "Me", "Drilon", "Not us", "Drilon"]
    // ];
    var questions = [];

    const choices = ["#choice1", "#choice2", "#choice3", "#choice4"];

    $("#start-button").on("click", function () {
        movieCall();
    });

    function movieCall() {
        $.ajax({
            url: "https://opentdb.com/api.php?amount=10&type=multiple",
            method: "GET"
        }).then(function (response) {
            for (x = 0; x < 10; x++) {
                questions.push([response.results[x].question,
                response.results[x].correct_answer,
                response.results[x].incorrect_answers[0],
                response.results[x].incorrect_answers[1],
                response.results[x].incorrect_answers[2],
                response.results[x].correct_answer]);
            }
            console.log("hey x is " + questions);
            nextQuestion();
        });
    }

    $(".button-choices").on("click", function () {
        console.clear();
        console.log("b:button-choices - START");

        pressAnswer($(this));
    });

    $(".reset-game").on("click", function () {
        console.clear();
        console.log("GAME RESTART!");
        initAll();
        nextQuestion();
    })

    function initAll() {
        questionNo = 1;
        questionAlive = 0;
        ctrCorrect = 0;
        ctrWrong = 0;
        ctrUn = 0;
        $(".scores").empty();
    }

    function pressAnswer(object) {
        questionAlive = 0;
        if (object.attr('id') == "choice1") {
            choiceComputer(object.val(), object.attr('answer'));
        } else if (object.attr('id') == "choice2") {
            choiceComputer(object.val(), object.attr('answer'));
        } else if (object.attr('id') == "choice3") {
            choiceComputer(object.val(), object.attr('answer'));
        } else if (object.attr('id') == "choice4") {
            choiceComputer(object.val(), object.attr('answer'));
        }
    }

    function noPress() {
        choiceComputer("nochosenoption", questions[questionNo - 1][5]);
    }

    function showAnswer() {
        console.log("f:showAnswer - START");
        $(".trivia-questions").css("display", "none");
        $(".show-answers").css("display", "initial");
    }

    function updateScore() {

    }


    function nextQuestion() {
        console.log("f:nextQuestion - START");


        // console.log("dayd" + response.results[0].question);
        questionAlive = 1;
        $(".next-timer").empty();
        $("#timer").empty();
        $("#start-button").css("display", "none");
        $(".show-answers").css("display", "none");
        $(".trivia-questions").css("display", "initial");
        $(".end-screen").css("display", "none");
        updateTriviaBox();
    }

    function choiceComputer(choice, answer) {
        console.log("f:choiceComputer - START");
        showAnswer();
        if (choice == answer) {
            $("#right-wrong").text("YOU ARE CORRECT!!!");
            ctrCorrect++;
        }
        else if (choice == "nochosenoption") {
            $("#right-wrong").text("TIME'S UP!!!");
            $("#correct-answer").text("THE CORRECT ANSWER IS " + answer);
            ctrUn++;
        }
        else {
            $("#right-wrong").text("WRONG!!!");
            $("#correct-answer").text("THE CORRECT ANSWER IS " + answer);
            ctrWrong++;
        }
        questionNo++;
        let nextTime = 4;
        if (!questionAlive) {
            let nextTimer = setInterval(function () {
                console.log("nextTime : " + nextTime);
                nextTime--;
                if (nextTime == 0) {
                    clearInterval(nextTimer);
                }

                $(".next-timer").text("Next question to appear in " + nextTime + " seconds.");
            }, 1000);
        }
        console.log("qno : " + questionNo);
        console.log("qlength: " + questions.length);
        setTimeout(function () {
            if (questionNo <= questions.length) {
                nextQuestion();
            } else {
                $(".show-answers").css("display", "none")
                $(".end-screen").css("display", "initial");
                $(".scores").append("<li>Right Answers: " + ctrCorrect + "</li>");
                $(".scores").append("<li>Wrong Answers: " + ctrWrong + "</li>");
                $(".scores").append("<li>Unanswered: " + ctrUn + "</li>");
            }
        }, 4000);
    }

    function startTimer() {
        console.log("f:startTimer - START");
        let time = 10;
        let timer = setInterval(function () {
            if (questionAlive == 1) {
                $("#timer").text(time + " seconds!");
                if (time == 0) {
                    questionAlive = 0;
                    clearInterval(timer);
                    noPress();
                }
                time--;
            } else if (questionAlive == 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    function updateTriviaBox() {
        console.log("f:updateTriviaBox - START");
        startTimer();
        fillQuestions();
        fillChoices();
    }

    function fillQuestions() {
        console.log("f:fillQuestions - START");
        $("#question").text(questionNo + ".) " + questions[questionNo - 1][0]);
    }

    function fillChoices() {
        console.log("f:fillChoices - START");
        // for (x in questions.length) {
        for (y = 1; y < 5; y++) {
            // console.log("y = " + y);
            // console.log("choices y-1 = " + choices[y - 1]);
            // console.log("questions 0 y = " + questions[0][y]);
            $(choices[y - 1]).text(questions[questionNo - 1][y]);
            $(choices[y - 1]).attr("value", questions[questionNo - 1][y]);
            $(choices[y - 1]).attr("answer", questions[questionNo - 1][5]);
            console.log("value: " + $(choices[y - 1]).val());
            console.log("answer: " + $(choices[y - 1]).attr("answer"));
        }
        // }
        console.log("f:fillChoices - END");
    }

});