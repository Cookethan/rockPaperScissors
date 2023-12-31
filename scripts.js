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
const COMPUTERSSCORE = document.querySelector('.computersScore');
const PAGETITLE = document.querySelector('.title')

const ROCK = document.querySelector('#rock')
const PAPER = document.querySelector('#paper')
const SCISSORS = document.querySelector('#scissors')
const CHOICESARRAY = [ROCK, PAPER, SCISSORS]

//  create a function to select computers choice
function getComputerChoice(){
    // generate a random number between 1 and 3
    // write an if else to determine computers choice using the generated number
    // store computers choice in variable
    let num = Math.floor((Math.random() * 3) + 1);
    console.log(num)
    switch(num){
        case 1:
            computersChoice = "rock"
            break;
        case 2: 
            computersChoice = "paper"
            break;
        case 3:
            computersChoice = "scissors"
            break;
        default:
            console.log('getcomputerchoice is broken')
    }
}

// create a function to compare the choices and declare a winner
function compareChoices(computerChoice, userChoice){
    // compare users choice against computers choice
    // alter html to display the round winner

    // console.log('comp ' + computerChoice);
    // console.log('user ' + userChoice);
    COMPUTERSCHOICE.innerHTML = 'Computer: ' + computerChoice;
    USERCHOICE.innerHTML = 'You: ' + userChoice;
    if(computerChoice == userChoice){
        PAGETITLE.innerHTML = ('It\'s a tie!');
        return
    }
    if(userChoice == 'rock'){
        if(computerChoice == 'paper'){
            PAGETITLE.innerHTML = 'You Lose this round'
            computersScore = ++computersScore
        }else{
            PAGETITLE.innerHTML = 'You Win this round!!'
            usersScore = ++usersScore
        }
    }else if(userChoice == 'paper'){
        if(computerChoice == 'scissors'){
            PAGETITLE.innerHTML = 'You Lose this round'
            computersScore = ++computersScore
        }else{
            PAGETITLE.innerHTML = 'You Win this round!!'
            usersScore = ++usersScore
        }
    }else if(userChoice == 'scissors'){
        if (computerChoice== 'rock'){
            PAGETITLE.innerHTML = 'You Lose this round!'
            computersScore = ++computersScore
        }else{
            PAGETITLE.innerHTML = 'You Win this round!'
            usersScore = ++usersScore
        }
    }else{
        console.log('error');
    }
}

function checkScores(computersScore, usersScore){
// create a function that checks if the userScore or computerScore is greater than 3
    if (usersScore >= 3 || computersScore >= 3){
        CHOICESARRAY.forEach(button => button.disabled = true);
        PAGETITLE.innerHTML = 'Game Over!'
    }
    // if score>3 disable input button
    // declare game winner
}
function updateScores(computersScore, usersScore){
    COMPUTERSSCORE.innerHTML = 'Computers score: ' + computersScore;
    USERSCORE.innerHTML = 'Your score:' + usersScore;
}



CHOICESARRAY.forEach(button => button.addEventListener('click', function(choice){
    // add EventListener to user input button that calls playRound function
    // create a function that plays out a round 
    // assign userChoice based on button pressed
    // call getComputerChoice
    // call compareChoices
    // call checkScores
    usersChoice = choice.target.id;
    getComputerChoice();
    compareChoices(computersChoice, usersChoice);
    updateScores(computersScore, usersScore);
    checkScores(computersScore, usersScore);

}))