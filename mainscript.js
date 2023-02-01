//1. - Make computer randomly select rock, paper or scissors
    //1.1 - create a variable 'computerChoice' inside a function getComputerChoice
    //1.2 - generate a random, whole number between 1 - 3
    //1.3 - if number is 1 assign 'rock' to 'computerChoice', if 2 assign 'paper', if 3 assign 'scissors'
    //1.4 - return 'computerChoice'

//2. - Allow user to select rock, paper or scissors
    //2.1 - create a variable 'playerCHoice' inside a function playerChoice
    //2.2 - generate a popup box that takes input
    //2.3 - store user input in a variable 'playerChoice'
    //2.4 - return 'playerChoice'

//3. - Compare computer and user selection and declare winner inside  a function game
    //3.1 - Convert user input to lowercase and check wether it matches rock paper or scissors
    //3.2 - if no, ask to repeat the input, repeat 3.1 untill a match is found
    //3.3 - once a match is found compare against computer choice and return winner



function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    let computerChoice
    if (randomNumber === 1) computerChoice = 'rock'
    else if (randomNumber === 2) computerChoice = 'paper'
    else if (randomNumber === 3) computerChoice = 'scissors'
    return computerChoice
}

function playerChoice(){
    let playerChoice = prompt('Type the desired hand: ')
    return playerChoice
}


