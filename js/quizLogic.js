
            var obj;
            var currentCorrectAns;
            var incorrectAns = 0;
            var correctAns = 0;
            var questionNumber = -1;
            var completed = false;
            const URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
            
            function sleep(ms) {
                // console.log("Inside of sleep for " + ms)
                return (new Promise(resolve => setTimeout(resolve, ms)));
            }

            document.getElementById("btn1").addEventListener("click", ansChecker1);
            document.getElementById("btn2").addEventListener("click", ansChecker2);
            document.getElementById("btn3").addEventListener("click", ansChecker3);
            document.getElementById("btn4").addEventListener("click", ansChecker4);

            $.get(URL, function(data, status) {
                // data: The data returned from the server
                // status: The status of the request (success or error)
                // Use the data here
                console.log(data);
                obj = data;
            });

            async function ansChecker1() {
                if (document.getElementById("btn1").innerHTML == currentCorrectAns) {
                    correctAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("correct");
                    document.getElementById("correctPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("correctPopUp").style.display = "none";
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                } else {
                    incorrectAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("incorrect");
                    document.getElementById("incorrectPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("incorrectPopUp").style.display = "none"
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                }
            }

            async function ansChecker2() {
                if (document.getElementById("btn2").innerHTML == currentCorrectAns) {
                    correctAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("correct");
                    document.getElementById("correctPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("correctPopUp").style.display = "none";
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                } else {
                    incorrectAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("incorrect");
                    document.getElementById("incorrectPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("incorrectPopUp").style.display = "none"
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                }
            }

            async function ansChecker3() {
                if (document.getElementById("btn3").innerHTML == currentCorrectAns) {
                    correctAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("correct");
                    document.getElementById("correctPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("correctPopUp").style.display = "none";
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                } else {
                    incorrectAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("incorrect");
                    document.getElementById("incorrectPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("incorrectPopUp").style.display = "none"
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                }
            }

            async function ansChecker4() {
                if (document.getElementById("btn4").innerHTML == currentCorrectAns) {
                    correctAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("correct");
                    document.getElementById("correctPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("correctPopUp").style.display = "none";
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                } else {
                    incorrectAns++;
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("incorrect");
                    document.getElementById("incorrectPopUp").style.display = "block"
                    await sleep(1500);
                    document.getElementById("incorrectPopUp").style.display = "none"
                    await sleep(500);
                    document.body.classList.remove("correct");
                    document.body.classList.remove("incorrect");
                    document.body.classList.add("neutral");
                    loadNextQuestion();
                }
            }

            function startGame() {
                if (!completed) {
                    document.getElementById("start-btn").style.display = "none";
                    document.getElementById("qCon").style.display = "grid";

                    quizGame();
                } else {
                    $.get(URL, function(data, status) {
                        // data: The data returned from the server
                        // status: The status of the request (success or error)
                        // Use the data here
                        console.log(data);
                        obj = data;
                    });
                    location.reload();
                }
                
            }

            function quizGame() {
                loadNextQuestion();

            }

            //This function will load the next question
            function loadNextQuestion() {
                
                console.log(correctAns);
                console.log(incorrectAns);
                questionNumber++;
                if (questionNumber < 10) {
                    $("#question").text(htmlDecode(obj.results[questionNumber].question))
                    currentCorrectAns = htmlDecode(obj.results[questionNumber].correct_answer);
                    console.log(currentCorrectAns)
                    let randomNo = Math.floor(Math.random() * 4) + 1;

                    switch(randomNo) {
                        case 1:
                            $("#btn1").text(htmlDecode(obj.results[questionNumber].correct_answer))
                            $("#btn2").text(htmlDecode(obj.results[questionNumber].incorrect_answers[0]))
                            $("#btn3").text(htmlDecode(obj.results[questionNumber].incorrect_answers[1]))
                            $("#btn4").text(htmlDecode(obj.results[questionNumber].incorrect_answers[2]))
                            break;
                        case 2:
                            $("#btn2").text(htmlDecode(obj.results[questionNumber].correct_answer))
                            $("#btn1").text(htmlDecode(obj.results[questionNumber].incorrect_answers[0]))
                            $("#btn3").text(htmlDecode(obj.results[questionNumber].incorrect_answers[1]))
                            $("#btn4").text(htmlDecode(obj.results[questionNumber].incorrect_answers[2]))
                            break;
                        case 3:
                            $("#btn3").text(htmlDecode(obj.results[questionNumber].correct_answer))
                            $("#btn2").text(htmlDecode(obj.results[questionNumber].incorrect_answers[0]))
                            $("#btn1").text(htmlDecode(obj.results[questionNumber].incorrect_answers[1]))
                            $("#btn4").text(htmlDecode(obj.results[questionNumber].incorrect_answers[2]))
                            break;
                        case 4:
                            $("#btn4").text(htmlDecode(obj.results[questionNumber].correct_answer))
                            $("#btn2").text(htmlDecode(obj.results[questionNumber].incorrect_answers[0]))
                            $("#btn3").text(htmlDecode(obj.results[questionNumber].incorrect_answers[1]))
                            $("#btn1").text(htmlDecode(obj.results[questionNumber].incorrect_answers[2]))
                            break;
                    }
                } else {
                    // When the game ends, make the start button appear
                    // Add elements so that the 
                    const gameFin = document.createElement("h2");
                    gameFin.innerHTML = "You have completed your Quiz, Here are your scores:";
                    document.getElementById("game-box").appendChild(gameFin);


                    const rightAns = document.createElement("h2");
                    rightAns.innerHTML = "Correct Answers: " + correctAns;
                    document.getElementById("game-box").appendChild(rightAns);


                    const wrongAns = document.createElement("h2");
                    wrongAns.innerHTML = "Incorrect Answers: " + incorrectAns;
                    document.getElementById("game-box").appendChild(wrongAns);
                    

                    const score = document.createElement("h2");
                    score.innerHTML = "Your Grade: " + (correctAns/10) * 100 + "%"; 
                    document.getElementById("game-box").appendChild(score);

                    document.getElementById("start-btn").innerHTML = "Play Again"
                    document.getElementById("start-btn").style.display = "block";
                    document.getElementById("qCon").style.display = "none";
                    completed = true;
                }
            }
            
            //This function will unescape HTML entites
            // Ex. htmlDecode(&lt;img src='myimage.jpg'&gt;) --> return: src='myimage.jpg'
            // input is a string
            function htmlDecode(input) {
                var doc = new DOMParser().parseFromString(input, "text/html");
                return doc.documentElement.textContent;
            }
            // Will randomize where the correct answer is.

            document.getElementById("backBtn").addEventListener("click", function(){
                window.location = "/EXIT2";
            });
                