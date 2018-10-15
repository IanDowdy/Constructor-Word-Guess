let Letter = require("./Letter")

let display = [];
  let letterArrays = [];

let Word = function (assignedWord) {

    //let display = [];
  
    this.lettersInWord = assignedWord.split("");

    this.displayWord = function () {
        for (i = 0; i < lettersInWord.length; i++) {
            let letterObj = new Letter(lettersInWord[i]);
            //let tempLetter = lettersInWord[i];
            //let temp = new Letter(tempLetter);
            letterArrays.push(letterObj);
            display += letterObj.obtainLetter();
        }
        console.log(display)
    }
    //A function that takes a character as an argument and
    //calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.checkGuess = function (guess) {
        console.log(guess)
        for (x = 0; x < letterArrays.length; x++) {
            console.log(guess)
           letterArrays[x].checkLetter(guess);
        }
    }


}

Word("fart");
checkGuess("a");
displayWord();


