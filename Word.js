let Letter = require("./Letter")

let display = [];
let letterArrays = [];
let letterObj = [];

let Word = function (assignedWord) {

    //run the Letter constructor loop when Word is fired.

    this.lettersInWord = assignedWord.split("");

    for (i = 0; i < lettersInWord.length; i++) {
        let letterObj = new Letter(lettersInWord[i]);
        letterArrays.push(letterObj);
    }
    this.displayWord = function () {
        for (r = 0; r < letterArrays.length; r++) {
            display += letterArrays[r].obtainLetter();
        }
        console.log(display)
    }
    //A function that takes a character as an argument and
    //calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.checkGuess = function (guess) {
        console.log(guess)
        for (x = 0; x < letterArrays.length; x++) {
            letterArrays[x].checkLetter(guess);
        }
    }


}

module.exports = Word;

