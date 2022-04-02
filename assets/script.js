var words = ["github", "bootcamp", "Jerome"];
var startBtn = document.getElementById("start");
var countEl = document.getElementById("counter");
var messageEl = document.getElementById("message");


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