let Letter = require("./Letter")

//holds the selected word letter objects
let letterArrays = [];
//this holds the letters of the word about to be run the letter constructor. possibly unnecessary here.
//let letterObj = [];

//Word constructor
let Word = function (assignedWord) {

    //takes the word passed through the word constructor and splits it into an array of letters
    this.lettersInWord = assignedWord.split("");
    //variable used to display the game.
    this.display = [];

    //when the constructor is fired, another constructor is activated for each letter in the Word() constructors argument.
    for (i = 0; i < lettersInWord.length; i++) {
        let letterObj = new Letter(lettersInWord[i]);
        letterArrays.push(letterObj);
    }

    //displays player's current situation. 
    this.displayWord = function () {
       //every time the display is updated it is first cleared.
        display = [];
        //when displaying the word we first check to see whether or any of the letters have been guessed.
        for (r = 0; r < letterArrays.length; r++) {
            display += letterArrays[r].obtainLetter();
        }
        console.log("\n_________________________________________\n");
        console.log("");
        console.log(display)
        console.log("");
        console.log("\n_________________________________________\n");
        
    }

    //A function that takes a character as an argument and
    //calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.checkGuess = function (guess) {
        for (x = 0; x < letterArrays.length; x++) {
            letterArrays[x].checkLetter(guess);
        }
    }

    //here's the function to reset the display after every round because i was having trouble with that.
    this.resetDisplay = function() {
        this.display = [];
        letterArrays = [];
    }
}

module.exports = Word, letterArrays;

