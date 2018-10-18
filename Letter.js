

let Letter = function(letterAssigned) {
    //guessedLetter value initialized but not connected to anything.
    this.ltr = letterAssigned;
    //all guesses start at false.
    this.letterGuessed = false;
    
    this.obtainLetter = function () {
        if (this.letterGuessed === true) {
            return letterAssigned;
            //console.log(letterValue);
        } else {
            return "_";
            //console.log("_")
        }
    }
    //the actual comparison function.
    this.checkLetter = function (guess) {
        if (letterAssigned === guess) {
            //console.log("correct!", letterAssigned, guess);
            this.letterGuessed = true;
            //console.log("wrong", letterAssigned, guess)
        }
    }

}

module.exports = Letter;
