//Make computer randomly select rock, paper or scissors
function getComputerChoice(){
    //Generate a random, whole number between 1 - 3
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    let computerChoice
    //If number is 1 assign 'rock' to 'computerChoice', if 2 assign 'paper', if 3 assign 'scissors'
    if (randomNumber === 1) computerChoice = 'rock'
    else if (randomNumber === 2) computerChoice = 'paper'
    else if (randomNumber === 3) computerChoice = 'scissors'
    return computerChoice
}



//Compare computer and user selection and declare winner
function oneHand(playerHand) {
    let computerHand = getComputerChoice()
    let newPlayerHand = playerHand

    //Compare user hand with computer hand and declare a winner or a draw
    if (computerHand === newPlayerHand) return 'Draw!'

    else if ((computerHand === 'rock' && newPlayerHand === 'scissors') ||
             (computerHand === 'scissors' && newPlayerHand === 'paper') ||
             (computerHand === 'paper' && newPlayerHand === 'rock')) return 'Computer Wins! ' + computerHand + ' beats ' + newPlayerHand
    
    else if ((computerHand === 'paper' && newPlayerHand === 'scissors') ||
             (computerHand === 'scissors' && newPlayerHand === 'rock') ||
             (computerHand === 'rock' && newPlayerHand === 'paper')) return 'Player Wins! ' + newPlayerHand + ' beats ' + computerHand
    else return 'Unexpected hands: ' + newPlayerHand + ' ' + computerHand
}

let rock = document.getElementById('rock')
    rock.addEventListener('click', () =>{
        console.log(oneHand('rock'))
    })
