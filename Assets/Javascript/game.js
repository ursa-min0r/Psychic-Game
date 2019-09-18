//array
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//variables
var wins = 0;
var losses = 0;
var guesses = 9;

//references
var computerChoiceText = document.getElementById("computerchoice-text");
var userChoiceText = document.getElementById("userchoice-text");
var lossesText = document.getElementById("losses-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");

//functions
document.onkeyup = function(event) {

    userGuess = event.key;

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (event.key === computerChoices) {
        wins++;
    }

    else if (event.key === computerChoices) {
        losses++;
    }
    else if (event.key) {

        guesses;
    }

    userChoiceText.textContent = "Your Choice: " + userGuess;
    winsText.textContent = "Your Wins: " + wins;
    lossesText.textContent = "Your Losses: " + losses;
    guessesText.textContent = "Remaining Guesses: " + guesses;
};
