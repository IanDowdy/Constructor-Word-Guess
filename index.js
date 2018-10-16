let word = require("./Word");
let inquirer = require("inquirer");
let chalk = require("chalk");


let selectedWord;
let attemptsLeft;
let wordCompleted;

function gameplay() {
    if(attemptsLeft > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "selection",
                message: "Choose a letter"
            }
        ]).then(function(letterChoice){ 
            let playerGuess = letterChoice.selection;
            //console.log(letterChoice.selection);
            checkGuess(playerGuess);
            //display = [];
            displayWord();
            
            checkComplete();
           
            if (attemptsLeft === 0 || wordCompleted === true) {
                endRound();
            } else {
                gameplay();
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
}

round = 0;
let wordList = ["sabrina", "seven", "pepper", "tulip"];
let usedWords = [];
//word("rim");
//checkGuess("r");

function guessChecker(object) {
    if (!object.letterGuessed){
    return;
} else {
    endRound();
}
}

function gameStart() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
     attemptsLeft = selectedWord.length + 5;
    let wordCompleted = false;
    console.log(selectedWord, attemptsLeft);
    word(selectedWord);
    

    inquirer.prompt([
        {
            name: "introduction",
            type: 'confirm',
            message: "Are you ready to play some Hangman?"
        }
    ]).then(function (response) {
        console.log(chalk.blue("Welcome Node Constructor hangman!"));
        console.log(chalk.blue("You will start this round with ") + chalk.bgBlue(attemptsLeft) + chalk.blue(" attempts. Good Luck!"))
       gameplay();
    })
}

gameStart();
