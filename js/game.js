
/**
 * Game 2 for the Client Server Project.
 * @author Dalibor Cavlovic
 */

 function GET(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();
}

/**
 * Allows the program to sleep for any number of milliseconds
 * @param {} ms - Milliseconds to sleep for
 * @returns New promise to timeout the program.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Stores the generated sequence
var generatedSequence = new Array();
//counter of the current point of the sequence the user is in
var counter = 0;
//The current stage/difficulty of the sequence
//Will also be stored as the highscore upon Game Over
var sequenceStage = 0;
//If correct is set to true, the user can move onto the next stage
var highscore = 1;

var correct = true;
var firstTime = true;
if (firstTime){
    GET("/getscore2", (response) => {
        response = JSON.parse(response);
        highscore = response.score2;
        document.getElementById("highscore").innerHTML = highscore;
    });
    firstTime = false;
}


/**
 * The function to run the game.
 */
function game() {
        if (correct != false) {
            document.getElementById("sequenceButton").innerHTML = "Start the Sequence";
            document.getElementById("startSequenceText").innerHTML = "New Sequence...";
            sequenceStage++
            document.getElementById("seqLength").innerHTML = sequenceStage;
            generatedSequence.splice(0,generatedSequence.length);
            beginSequence();
        } else {
            console.log("User tried to restart the sequence mid-game");
        }
        correct = false;
}

//variables for all of the boxes
    var box1 = document.getElementById("inside_box1");
    var box2 = document.getElementById("inside_box2");
    var box3 = document.getElementById("inside_box3");
    var box4 = document.getElementById("inside_box4");
    var box5 = document.getElementById("inside_box5");

    /**
     * Starts to make sequence the user has to guess.
     * Will make the buttons flash in the order. 
     */
async function beginSequence() {
    await sleep(2000);
    document.getElementById("startSequenceText").innerHTML = "";
        for (var i = 0; i < sequenceStage; i++) {
            var randomNum = Math.random();
            if (randomNum < 0.20) {
                box1.style.backgroundColor = 'black'
        
                await sleep(1000);
                box1.style.backgroundColor = '#3B8BEB';
                generatedSequence.push(1);
                await sleep(500);
            } else if (randomNum <= 0.40) {
                box2.style.backgroundColor = 'black'
                
                await sleep(1000);
                box2.style.backgroundColor = '#FAED26';
                generatedSequence.push(2);
                await sleep(500);
            } else if (randomNum <= 0.60) {
                box3.style.backgroundColor = 'black'
                await sleep(1000);

                generatedSequence.push(3);
                box3.style.backgroundColor = '#ef5858';
                await sleep(500);
            } else if (randomNum <= 0.80) {
                box4.style.backgroundColor = 'black'
        
                await sleep(1000);
                box4.style.backgroundColor = '#46e150';
                generatedSequence.push(4);
                await sleep(500);
            } else {
                box5.style.backgroundColor = 'black'
        
                await sleep(1000);
                box5.style.backgroundColor = 'rgb(246, 120, 246)';
                generatedSequence.push(5);
                await sleep(500);
            }
        }
        document.getElementById("startSequenceText").innerHTML = "Choose the correct sequence.";
}

//Checks if the sequence has been matched or not when this box is clicked.
//If not change the games state to over and save the user's best score to the sequenceStage.
document.getElementById("inside_box1").addEventListener("click", async function() {
    box1.style.opacity = "50%"; 
    await sleep(1000);
    box1.style.opacity = "100%";

    if (generatedSequence.includes(1) && generatedSequence.indexOf(1) == counter) {
        counter++;
        if (counter == sequenceStage) {
            correct = true;
            counter = 0;
            await sleep(1000);
            game();
        }
    } else {
        document.getElementById("startSequenceText").innerHTML = "Game Over!";
        document.getElementById("sequenceButton").innerHTML = "Restart Sequence";
        if (sequenceStage > highscore) {
            GET("/updatescore2?score2=" + sequenceStage, function (data) {
                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        console.log("fail");
                    } else {
                        console.log("successful");
                    }
                }
            });

            await sleep(300);

            GET("/getscore2", (response) => {
                response = JSON.parse(response);
                highscore = response.score2;
                document.getElementById("highscore").innerHTML = highscore;
                console.log("highscore", highscore);
            });
            
            
            document.getElementById("highscore").innerHTML = highscore;
        }
        sequenceStage = 0;
        //reset correct so the game can be restarted if the user wishes.
        correct = true;
    }
});

//Checks if the sequence has been matched or not when this box is clicked.
//If not, change the games state to over and save the user's best score to the sequenceStage.
document.getElementById("inside_box2").addEventListener("click", async function() {
    box2.style.opacity = "50%";      
    await sleep(1000);
    box2.style.opacity = "100%";

    if (generatedSequence.includes(2) && generatedSequence.indexOf(2) == counter) {
        counter++;
        if (counter == sequenceStage) {
            correct = true;
            counter = 0;
            await sleep(1000);
            game();
        }
    } else {
        document.getElementById("startSequenceText").innerHTML = "Game Over!";
        document.getElementById("sequenceButton").innerHTML = "Restart Sequence";
        if (sequenceStage > highscore) {
            GET("/updatescore2?score2=" + sequenceStage, function (data) {
                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        console.log("fail");
                    } else {
                        console.log("successful");
                    }
                }
            });
            await sleep(300);
            GET("/getscore2", (response) => {
                response = JSON.parse(response);
                highscore = response.score2;
                document.getElementById("highscore").innerHTML = highscore;
                console.log("highscore", highscore);
            });
            document.getElementById("highscore").innerHTML = highscore;
        }
        sequenceStage = 0;
        //reset correct so the game can be restarted if the user wishes.
        correct = true;
    }
});

//Checks if the sequence has been matched or not when this box is clicked.
//If not change the games state to over and save the user's best score to the sequenceStage.
document.getElementById("inside_box3").addEventListener("click", async function() {
    box3.style.opacity = "50%";
                await sleep(1000);
                box3.style.opacity = "100%";
    if (generatedSequence.includes(3) && generatedSequence.indexOf(3) == counter) {
        counter++;
        if (counter == sequenceStage) {
            correct = true;
            counter = 0;
            await sleep(1000);
            game();
        }
    } else {
        document.getElementById("startSequenceText").innerHTML = "Game Over!";
        document.getElementById("sequenceButton").innerHTML = "Restart Sequence";
        if (sequenceStage > highscore) {
            GET("/updatescore2?score2=" + sequenceStage, function (data) {
                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        console.log("fail");
                    } else {
                        console.log("successful");
                    }
                }
            });
            await sleep(300);
            GET("/getscore2", (response) => {
                response = JSON.parse(response);
                highscore = response.score2;
                document.getElementById("highscore").innerHTML = highscore;
                console.log("highscore", highscore);
            });
        }
        sequenceStage = 0;
        //reset correct so the game can be restarted if the user wishes.
        correct = true;
    }
});

//Checks if the sequence has been matched or not when this box is clicked.
//If not change the games state to over and save the user's best score to the sequenceStage.
document.getElementById("inside_box4").addEventListener("click", async function() {
    box4.style.opacity = "50%";
        
                await sleep(1000);
                box4.style.opacity = "100%";
    if (generatedSequence.includes(4) && generatedSequence.indexOf(4) == counter) {
        counter++;
        if (counter == sequenceStage) {
            correct = true;
            counter = 0;
            await sleep(1000);
            game();
        }
    } else {
        document.getElementById("startSequenceText").innerHTML = "Game Over!";
        document.getElementById("sequenceButton").innerHTML = "Restart Sequence";
        if (sequenceStage > highscore) {
            GET("/updatescore2?score2=" + sequenceStage, function (data) {
                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        console.log("fail");
                    } else {
                        console.log("successful");
                    }
                }
            });
            await sleep(300);
            GET("/getscore2", (response) => {
                response = JSON.parse(response);
                highscore = response.score2;
                document.getElementById("highscore").innerHTML = highscore;
                console.log("highscore", highscore);
            });
            document.getElementById("highscore").innerHTML = highscore;
        }
        sequenceStage = 0;
        //reset correct so the game can be restarted if the user wishes.
        correct = true;
    }
});

//Checks if the sequence has been matched or not when this box is clicked.
//If not change the games state to over and save the user's best score to the sequenceStage.
document.getElementById("inside_box5").addEventListener("click", async function() {
    box5.style.opacity = "50%";
    await sleep(1000);
    box5.style.opacity = "100%";

    if (generatedSequence.includes(5) && generatedSequence.indexOf(5) == counter) {
        counter++;
        if (counter == sequenceStage) {
            correct = true;
            counter = 0;
            await sleep(1000);
            game();
        }
    } else {
        document.getElementById("startSequenceText").innerHTML = "Game Over!";
        document.getElementById("sequenceButton").innerHTML = "Restart Sequence";
        if (sequenceStage > highscore) {
            GET("/updatescore2?score2=" + sequenceStage, function (data) {
                if (data) {
                    let dataParsed = JSON.parse(data);
                    if (dataParsed.status == "fail") {
                        console.log("fail");
                    } else {
                        console.log("successful");
                    }
                }
            });
            await sleep(300);
            GET("/getscore2", (response) => {
                response = JSON.parse(response);
                highscore = response.score2;
                document.getElementById("highscore").innerHTML = highscore;
                console.log("highscore", highscore);
            });
            document.getElementById("highscore").innerHTML = highscore;
        }
        sequenceStage = 0;
        //reset correct so the game can be restarted if the user wishes.
        correct = true;
    }
});

document.getElementById("backButton").addEventListener("click", function(){
    window.location = "/EXIT2";
});


