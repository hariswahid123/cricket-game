let dice1 = "<div class='container'><div>single Run<div></div>";
let dice2 = " <div class='container'><div>two Run<div></div>";
let dice3 = "<div class='container'><div>three run<div></div>";
let dice4 = "<div class='container'><div style='color: rgba(15, 165, 158, 0.966)'>four Run<div></div>";
let dice6 = "<div class='container'><div style='color:rgb(25, 201, 25)'>six Run<div></div>";

let wide = "<div class='container'><div class='nospecial' style='color: white'>wide ball</div></div>";
let dotBall = "<div class='container'><div class='nospecial'>dot ball</div></div>";
let wicket = "<div class='container'><div class='nospecial'style='color: red';>wicket</div></div>";
let noBall = "<div class='container'><div class='nospecial'>no ball</div></div>";

let resultDice = document.getElementById("resultDice");
let runs = document.getElementById("runs");
let ballsDisplay = document.getElementById("ball"); 
let overs = document.getElementById("over");
let wickets = document.getElementById("wicket");

let totalBalls = 0;

runs.innerHTML = 0;
ballsDisplay.innerHTML = 0;
wickets.innerHTML = 0;
overs.innerHTML = 0;

function play() {

    if (parseInt(wickets.innerHTML) >= 3) {
        alert("All out!");
        return;
    }

    if (totalBalls >= 12) {
        alert("All over!");
        return;
    }

    let diceRoll = Math.ceil(Math.random() * 9);

    if (diceRoll === 1) {
        runs.innerHTML = parseInt(runs.innerHTML) + 1;
        totalBalls += 1;
        resultDice.innerHTML = dice1;
    } else if (diceRoll === 2) {
        runs.innerHTML = parseInt(runs.innerHTML) + 2;
        totalBalls += 1;
        resultDice.innerHTML = dice2;
    } else if (diceRoll === 3) {
        runs.innerHTML = parseInt(runs.innerHTML) + 3;
        totalBalls += 1;
        resultDice.innerHTML = dice3;
    } else if (diceRoll === 4) {
        runs.innerHTML = parseInt(runs.innerHTML) + 4;
        totalBalls += 1;
        resultDice.innerHTML = dice4;
    } else if (diceRoll === 5) { // wide
        runs.innerHTML = parseInt(runs.innerHTML) + 1;
        resultDice.innerHTML = wide;
        updateDisplay();
        return;
    } else if (diceRoll === 6) {
        runs.innerHTML = parseInt(runs.innerHTML) + 6;
        totalBalls += 1;
        alert("congratulation!");
        resultDice.innerHTML = dice6;
    } else if (diceRoll === 7) {
        totalBalls += 1;
        resultDice.innerHTML = dotBall;
    } else if (diceRoll === 8) {
        totalBalls += 1;
        wickets.innerHTML = parseInt(wickets.innerHTML) + 1;
        alert("ohh noo");
        resultDice.innerHTML = wicket;
    } else if (diceRoll === 9) { 
        runs.innerHTML = parseInt(runs.innerHTML) + 1;
        resultDice.innerHTML = noBall;
        updateDisplay();
        return;
    }

    updateDisplay(); // 🔄 Call to update over and ball UI
}



function updateDisplay() {
    ballsDisplay.innerHTML = totalBalls;

    let completedOvers = Math.floor(totalBalls / 6);

    overs.innerHTML = completedOvers;

    
}
