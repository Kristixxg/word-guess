var startBtn = document.getElementById("start");
var countEl = document.getElementById("counter");
var winsCount = document.getElementById("win-count");
var lossesCount = document.getElementById("loss-count");
var messageEl = document.getElementById("message");
var wordBox = document.querySelector("#word-box");
var resetBtn =  document.querySelector(".reset-score");


var words = ["github", "bootcamp", "jerome", "javascipt", "coding"];
var chosenWord;
var characters;
var numBlank;
var blankLetters;
var wins = 0;
var losses = 0;
var interval;

function showBlank() {
 chosenWord = words[Math.floor(Math.random() * words.length)];
 characters = chosenWord.split("");
 numBlank = characters.length;
    blankLetters =[];
  for (let i=0; i < numBlank; i++) {
    blankLetters.push("_") 
  }
  wordBox.textContent = blankLetters.join(" ")
}   


//key down 

document.addEventListener("keydown", function(event) {
    var keyPress = event.key;
    var lowerKeyPress = keyPress.toLowerCase();

    for (i=0; i<numBlank; i++) {
        if(lowerKeyPress === characters[i]) {
            blankLetters[i] = lowerKeyPress;
            wordBox.textContent = blankLetters.join(" ");
        }
    }

    endGame();
})

function endGame() {
    if (chosenWord === blankLetters.join("")) {
        wins++;
        winsCount.textContent = wins;
        clearInterval(interval);
        displayWinMsg();
    }
}


//get histories from loal storage - complete

renderLastScore();

function renderLastScore() {
    var wins = localStorage.getItem("wins");
    var losses = localStorage.getItem("losses");

    if (wins === 0 || losses === 0) {
        return;
    }

    winsCount.textContent = wins;
    lossesCount.textContent = losses;
}




//click start game, start counting down - complete
startBtn.addEventListener("click", function(event) {
   timer10secs();
    showBlank();
});

function timer10secs() { 
    
    var timerLeft = 10;

    interval = setInterval(function() {

        timerLeft--;
        countEl.textContent = timerLeft;

        if (timerLeft === 0) {
        losses++;
        lossesCount.textContent = losses;
        clearInterval(interval);
        displayLostMsg();
        }

    },1000);
};

function displayLostMsg() {
    messageEl.textContent= "You lost!";
}

function displayWinMsg() {
    messageEl.textContent= "You won!";
}


resetBtn.addEventListener("click", function(){
    winsCount.textContent = 0;
    lossesCount.textContent = 0;
});






//local storage
localStorage.setItem("wins", wins);
localStorage.setItem("losses", losses);
renderLastScore();




