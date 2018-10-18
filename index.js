let word = require("./Word");
let inquirer = require("inquirer");
let chalk = require("chalk");

//records how many rounds played for some reason. not yet implemented.
round = 0;
//list of usable words.
let wordList = ["sabrina", "seven", "pepper", "tulip"];
//holds used words.
let usedWords = [];

//initialize gloal variables.
let selectedWord;
let attemptsLeft;
let wordCompleted;


//main code i guess.
function gameplay() {
    //if there are still attempts left...
    if (attemptsLeft > 0) {
        //... prompt them to choose a letter.
        inquirer.prompt([
            {
                type: "input",
                name: "selection",
                message: "Choose a letter"
            }
        ]).then(function (letterChoice) {
            //store the players selected letter into a variable.
            let playerGuess = letterChoice.selection;
            //these 3 functions and if statement are the core.
            //checkGuess dips all the way into Letter.js to compare the choice versus the string to find ay matches
            //if there are matches, the letterGuessed toggle is flipped.
            //displayWord updates the screen by checking or the toggle and updating the underscores as necessary.
            //checkComplete looks to see whether the word displayed matches the selectedWord.
            //if it does it runs the endRound function.
            checkGuess(playerGuess);
            displayWord();
            checkComplete();
            //hasn't really been fully incorporated, but keeps the game going by running gameplay if there are still attempts left.
            if (attemptsLeft > 0) {
                gameplay();
            } else {
                gameOver();
            }
        })
    }
}

//pushes the word from the last round into a new array, asks th eu ser if they'd like to play again.
//also not fully incorporated. i keep running into random little bugs.
function endRound() {
    round++
    for (i = 0; i < wordList.length; i++) {
        if (selectedWord === wordList[i]) {
            let push = wordList.splice(i, 1).join()
            console.log(push)
            usedWords.push(push);
            console.log("CONGRATS YOU WIN!")
        }
    }
    inquirer.prompt([
        {
            name: "newGame",
            type: "confirm",
            message: "Would you like to play again?"
        }
    ]).then(function(response) {
        console.log(response);
    })
}


//selects a random word, runs the Word constructor with the selected word.
function gameStart() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    attemptsLeft = selectedWord.length + 5;
    let wordCompleted = false;
    console.log(selectedWord, attemptsLeft);
    word(selectedWord);
    console.log(chalk.blue("     You will start this round with ") + chalk.bgBlue(attemptsLeft) + chalk.blue(" attempts. Good Luck!"));
}


//asks if user wants to play hangman, and runs the initial gameplay code.
function intro() {

    inquirer.prompt([
        {
            name: "introduction",
            type: 'confirm',
            message: "Are you ready to play some Hangman?"
        }
    ]).then(function (response) {
        if (response.introduction) {
            console.log(chalk.blue("    Welcome Node Constructor hangman!"));
            gameStart();
            displayWord();
            gameplay();
        } else {
            console.log(chalk.bgRed("WELL HANGMAN DOESN\'T WANT TO PLAY WITH YOU EITHER!"));
        }
    })
}

//if the display word matches the selected word, the round has been won.
function checkComplete() {
    //console.log(letterArrays)
    if (display.trim() === selectedWord) {
        wordCompleted = true;
        endRound();
    }
}

//resets everything.
function newGame() {
    letterArray = [];
    letterObj = [];
    wordCompleted = false;
    resetDisplay();
    gameStart();
}

//starts game.
intro();
