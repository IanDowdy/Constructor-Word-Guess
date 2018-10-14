function Word() {
    this.lettersInWord = [];

    this.displayWord = function() {
        for (i = 0; i < lettersInWord.length; i++) {
            let temp = Letter.obtainLetter();
            let display = push(temp);
        }
        console.log(display)
    }

    this.checkGuess = function(char) {
        for (i = 0; i < lettersInWord.length; i++) {
            lettersInWords[i].checkLetter();
        }
    }


}