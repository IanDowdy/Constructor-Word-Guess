let word = require("./Word");
let inquirer = require("inquirer");
let chalk = require("chalk");

round = 0;
wordList = ["sabrina", "seven", "pepper", "tulip"];
//word("rim");
//checkGuess("r");

function gameStart() {
    let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    let attemptsLeft = selectedWord.length + 5;
    console.log(selectedWord, attemptsLeft);

    inquirer.prompt([
        {
            name: "introduction",
            type: 'confirm',
            message: "Are you ready to play some Hangman?"
        }
    ]).then(function (response) {
        console.log(chalk.blue("Welcome Node Constructor hangman!"));
    })
}
gameStart()

/*inquirer.prompt([
    {
      name: "selection",
      message: "What letter do you select?"
    }
  ]).then(function(selection) {
    console.log(selection.selection);
  });*/
