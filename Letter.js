

function Letter() {
    letterValue = "";
    letterGuessed = false;
    let obtainLetter = function() {
        if (guess) {
            console.log(guess);
            checkLetter(guess);
        } else {
            console.log("_")
        }
    }

    let checkLetter = function() {
        if(guess === correctLetter) {
            console.log("correct!");
            letterGuessed = true;
        }
    }

}