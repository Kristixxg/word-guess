var words = ["github", "bootcamp", "jerome"];
var startBtn = document.getElementById("start");
var countEl = document.getElementById("counter");
var winsCount = document.getElementById("win-count");
var lossesCount = document.getElementById("loss-count");
var messageEl = document.getElementById("message");



//key down 

function keydown(event) {
    var keyPress = event.key;
    var lowercaseKey = keyPress.toLowerCase();
}
// if pressed key matchs word[i]
//the blank appendChild(keyPress);















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

});

function timer10secs() { 

    var timerLeft = 10;

    var interval = setInterval(function() {

        timerLeft--;
        countEl.textContent = timerLeft;

        if (timerLeft === 0) {
        clearInterval(interval);
        displayMsg();
        }

    },1000);
};

function displayMsg() {
    messageEl.textContent= "You lost!";
}





//tracking results

var wins = 0;
var losses = 0;

// if () {
//     wins++;
// } else if {
//     losses++;
// }

//local storage
localStorage.setItem("wins", wins);
localStorage.setItem("losses", losses);
// renderLastScore();




