

let Letter = function(letterAssigned) {
    //guessedLetter value initialized but not connected to anything.
    this.letterAssigned = letterAssigned;
    //all guesses start at false.
    this.letterGuessed = false;
    this.obtainLetter = function () {
        if (this.letterGuessed) {
            return letterValue;
            //console.log(letterValue);
        } else {
            return "_";
            //console.log("_")
        }
    }
    //the actual comparison function.
    this.checkLetter = function (guess) {
        console.log("works up to here!")
        if (this.letterAssigned === guess) {
            console.log("correct!");
            letterGuessed = true;
        } 
    }

}

module.exports = Letter;
