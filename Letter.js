

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
        
        if (letterAssigned == guess) {
            console.log("correct!");
            this.letterGuessed = true;
            console.log(this.letterGuessed)
        } else {
            console.log("You\'re dumb!")
        }
    }

}

module.exports = Letter;
