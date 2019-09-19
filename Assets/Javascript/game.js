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
var guessesText2 = document.getElementById("guesses2-text");

//display
var userChoices = [];
//functions
document.onkeyup = function (event) {

    var userGuess = event.key;
    userChoices.push(userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess === computerGuess) {
        wins++;
        userChoices = [];
        guesses = 9;
    }

    else if (guesses === 0) {
        losses++;
        userChoices = [];
        guesses = 9;
    }
    else {

        guesses--;
    }

    userChoiceText.textContent = "Your Choice: " + userGuess;
    guessesText2.textContent = "You Guessed: " + userChoices;
    winsText.textContent = "Your Wins: " + wins;
    lossesText.textContent = "Your Losses: " + losses;
    guessesText.textContent = "Remaining Guesses: " + guesses;

};
