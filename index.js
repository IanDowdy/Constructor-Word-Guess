let word = require("./Word");
let inquirer = require("inquirer");
let chalk = require("chalk");

round = 0;
let wordList = ["sabrina", "seven", "pepper", "tulip"];
let usedWords = [];
//word("rim");
//checkGuess("r");

let selectedWord;
let attemptsLeft;
let wordCompleted;

function gameplay() {
    if (attemptsLeft > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "selection",
                message: "Choose a letter"
            }
        ]).then(function (letterChoice) {
            let playerGuess = letterChoice.selection;
            checkGuess(playerGuess);
            displayWord();
            checkComplete();
            if (attemptsLeft > 0) {
                gameplay();
            } else {
                gameOver();
            }
        })
    }
}
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
    console.log(wordList, usedWords);
    inquirer.prompt([
        {
            name: "newGame",
            type: "confirm",
            message: "Would you like to play again?"
        }
    ]).then(function (response) {
        if (response.newGame) {
            newGame();
        } else {
            console.log(chalk.bgRed("Well buzz off then!"))
        }
    });
}

function gameStart() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    attemptsLeft = selectedWord.length + 5;
    let wordCompleted = false;
    console.log(selectedWord, attemptsLeft);
    word(selectedWord);
    console.log(chalk.blue("     You will start this round with ") + chalk.bgBlue(attemptsLeft) + chalk.blue(" attempts. Good Luck!"));
}

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

function checkComplete() {
    //console.log(letterArrays)
    if (display.trim() === selectedWord) {
        wordCompleted = true;
        endRound();
    }
}

function newGame() {
    letterArray = [];
    letterObj = [];
    display = [];
    wordCompleted = false;
    gameStart();
}

intro();
