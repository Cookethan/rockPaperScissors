//  declare variable to hold computers choice
let computersChoice = null;
//  declate variable to hold users choice'
let usersChoice = null;
// declare variable to hold users score
let usersScore = 0;
// declare variable to hold computers score
let computersScore = 0;
//  declare variable to hold users choice paragraph in html
const USERCHOICE = document.querySelector('.usersChoice');
//  declare variable to hold users score paragraph in html
const USERSCORE = document.querySelector('.usersScore')
//  declare variable to hold computers choice paragraph in html
const COMPUTERSCHOICE = document.querySelector('.computersChoice');
//  declare variable to hold computers score paragraph in html
const COMPUTERSSCORE = document.querySelector('.computersScore')

const ROCK = document.querySelector('.rock')
const PAPER = document.querySelector('.paper')
const SCISSORS = document.querySelector('scissors')

//  create a function to select computers choice
    // generate a random number between 1 and 3
    // write an if else to determine computers choice using the generated number
    // store computers choice in variable
// create a function to get the users input
    // capture user put
    // make users input lowercase to avoid variation
    // store users choice in variable
// create a function to compare the choices and declare a winner
    // compare users choice against computers choice
    // alter html to display the round winner

// create a function that checks if the userScore or computerScore is greater than 3
    // if score>3 disable input button
    // declare game winner

// create a function that plays out a round 
    // call getComputerChoice
    // call getUserChoice
    // call compareChoices
    // call checkScores

// add EventListener to user input button that calls playRound function

USERCHOICE.innerHTML = "this is the users choice";