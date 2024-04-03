#! /user/bin/env node
// uper wali line ko shibang khty hain 
import inquirer from "inquirer";
// 1) computer will generate a random number - done.
// 2) user input for guessin number - done
// 3) computer user input with computer generated number and show result
const randomNumber = 20;
const answer = await inquirer.prompt([
    {
        name: "usreguessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
// agr (ye condition true hai tw wo round bracket ko run kry ga) or agr conditon wrong hogi tw wo else ki condition jo hum currly bracket m likheng usy run kry ga that it
if (answer.usreguessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
