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
    let result

    //Compare user hand with computer hand and declare a winner or a draw
    if (computerHand === newPlayerHand) {
        result = 'Draw!'
        return result
    } 

    else if ((computerHand === 'rock' && newPlayerHand === 'scissors') ||
             (computerHand === 'scissors' && newPlayerHand === 'paper') ||
             (computerHand === 'paper' && newPlayerHand === 'rock')) {
                result = 'Computer Wins! ' + computerHand + ' beats ' + newPlayerHand
                return result
            }
    
    else if ((computerHand === 'paper' && newPlayerHand === 'scissors') ||
             (computerHand === 'scissors' && newPlayerHand === 'rock') ||
             (computerHand === 'rock' && newPlayerHand === 'paper')) {
                result = 'Player Wins! ' + newPlayerHand + ' beats ' + computerHand
                return result
            }  
    else {
        result = 'Unexpected hands: ' + newPlayerHand + ' ' + computerHand
        return result
    }
    
}

//Shows the result message div with the winner and score
function endGame(computerScore, playerScore){
    //Disable game buttons untill 'PLay new round' is clicked
    document.getElementById('btn-container').classList.replace('visible','hidden');
    document.getElementById('results-message-div').classList.replace('hidden','visible');

    let resultsField = document.getElementById('results-field')
    let winnerMessage = document.getElementById('winner-message')
    let winnerScore = document.getElementById('winner-score')
    
    if(playerScore > computerScore){
        resultsField.style.backgroundColor = 'green'
        winnerMessage.innerText = 'Player Wins!'
        winnerScore.innerText = playerScore
    }
    else if(playerScore < computerScore){
        resultsField.style.backgroundColor = 'red'
        winnerMessage.innerText = 'Computer Wins!'
        winnerScore.innerText = computerScore
    }
    else {
        resultsField.style.backgroundColor = 'yellow'
        winnerMessage.innerText = 'Draw!'
    }
}

//Unlocks game buttons and resets score
function playNewRound() {
    console.log('play new round clicked')
    clearScore()
    document.getElementById('results-message-div').classList.replace('visible','hidden');
    document.getElementById('btn-container').classList.replace('hidden','visible');
    document.getElementById('results-field').style.backgroundColor = 'grey'
}

//Check how many rounds have been played
function checkRounds() {
    let currentRound = document.getElementById('rounds-played').innerText
    return parseInt(currentRound)
}

function updateRoundsPlayed(checkRounds) {
    let currentRound = checkRounds
    document.getElementById('rounds-played').innerText = ++currentRound
}

//Convert current score to int and add 1
function updatePlayerScore(){
    let currentScore = document.getElementById('player-score').innerText
    parseInt(currentScore)
    document.getElementById('player-score').innerText = ++currentScore
}

//Convert current score to int and add 1
function updateComputerScore(){
    let currentScore = document.getElementById('computer-score').innerText
    parseInt(currentScore)
    document.getElementById('computer-score').innerText = ++currentScore
}

//Add result string from oneHand to current round 
function updateCurrentRound(result){
    document.getElementById('current-round').innerText = result
}

function checkPlayerScore() {
    let score = document.getElementById('player-score').innerText
    return parseInt(score)
}

function checkComputerScore() {
    let score = document.getElementById('computer-score').innerText
    return parseInt(score)
}

//Reset all scores to 0
function clearScore() {
    document.getElementById('rounds-played').innerText = '0'
    document.getElementById('player-score').innerText = '0'
    document.getElementById('computer-score').innerText = '0'
    document.getElementById('current-round').innerText = '-'
}

function adjustScore(event){
    if(checkRounds() === 4){
        updateRoundsPlayed(checkRounds())
        if(event.includes('Computer Wins!')) {
            updateComputerScore()
            updateCurrentRound(event)
        }
        else if(event.includes('Player Wins!')) {
            updatePlayerScore()
            updateCurrentRound(event)
        }
        else if(event.includes('Draw!')){
            updateCurrentRound(event)
        }
        endGame(checkComputerScore(), checkPlayerScore())
       
    }
    else {
        updateRoundsPlayed(checkRounds())
        if(event.includes('Computer Wins!')) {
            updateComputerScore()
            updateCurrentRound(event)
        }
        else if(event.includes('Player Wins!')) {
            updatePlayerScore()
            updateCurrentRound(event)
        }
        else if(event.includes('Draw!')){
            updateCurrentRound(event)
        }
    }
}


let rock = document.getElementById('rock')
rock.addEventListener('click', () =>{
    adjustScore(oneHand('rock'))
})

let paper = document.getElementById('paper')
paper.addEventListener('click', () =>{
    adjustScore(oneHand('paper'))
    
})

let scissors = document.getElementById('scissors')
scissors.addEventListener('click', () =>{
    adjustScore(oneHand('scissors'))
    
})

let newGameButton = document.getElementById('new-game-button')
newGameButton.addEventListener('click', () =>{
    playNewRound()
})
