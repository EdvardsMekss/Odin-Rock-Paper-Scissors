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
    let currentRound = document.getElementById('current-round')

    if(rounds === 5) endGame()

    //Compare user hand with computer hand and declare a winner or a draw
    if (computerHand === newPlayerHand) {
        document.getElementById('rounds-played').innerText = ++rounds
        currentRound.innerText = 'Draw!'
        return currentRound 
    } 

    else if ((computerHand === 'rock' && newPlayerHand === 'scissors') ||
             (computerHand === 'scissors' && newPlayerHand === 'paper') ||
             (computerHand === 'paper' && newPlayerHand === 'rock')) {
                document.getElementById('rounds-played').innerText = ++rounds
                document.getElementById('computer-score').innerText = ++computerScore
                currentRound.innerText = 'Computer Wins! ' + computerHand + ' beats ' + newPlayerHand
                return currentRound 
            }
    
    else if ((computerHand === 'paper' && newPlayerHand === 'scissors') ||
             (computerHand === 'scissors' && newPlayerHand === 'rock') ||
             (computerHand === 'rock' && newPlayerHand === 'paper')) {
                document.getElementById('rounds-played').innerText = ++rounds
                document.getElementById('player-score').innerText = ++playerScore
                currentRound.innerText = 'Player Wins! ' + newPlayerHand + ' beats ' + computerHand
                return currentRound 
            }  
    else {
        document.getElementById('rounds-played').innerText = ++rounds
        currentRound.innerText = 'Unexpected hands: ' + newPlayerHand + ' ' + computerHand
        return currentRound 
    }  
}

function endGame(){
    document.getElementsByClassName('btn').disabled = true
    let gameDiv = document.getElementById('results')
    gameDiv.style.display = 'none'
    let resultsDiv = document.createElement('div')
    resultsDiv.style.cssText = 'height: 300px; text-align: center; padding: 50px; border: black 2px solid'
    let resultMessage = document.createElement('h3')
    resultMessage.style.color = 'white'
    
    if(playerScore > computerScore){
        document.body.appendChild(resultsDiv)
        resultsDiv.appendChild(resultMessage)
        resultsDiv.style.backgroundColor = 'green'
        resultMessage.innerText = 'Player Wins! Score: ' + playerScore
    }
    else {
        document.body.appendChild(resultsDiv)
        resultsDiv.appendChild(resultMessage)
        resultsDiv.style.backgroundColor = 'red'
        resultMessage.innerText = 'Computer Wins! Score: ' + computerScore
    }
}

let rounds = 0
let playerScore = 0
let computerScore = 0
document.getElementById('rounds-played').innerText = rounds

let rock = document.getElementById('rock')
rock.addEventListener('click', () =>{
    oneHand('rock')
})

let paper = document.getElementById('paper')
paper.addEventListener('click', () =>{
    oneHand('paper')
    
})

let scissors = document.getElementById('scissors')
scissors.addEventListener('click', () =>{
    oneHand('scissors')
    
})

console.log(rounds)
