console.log("The computer plays: ")
let choices = ['rock','paper','scissors']
let choices2 = []
let humanScore = 0
let computerScore = 0
let humanChoice = getHumanChoice().toLowerCase()
let computerChoice = getComputerChoice()


function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))]
}

console.log(computerChoice)


console.log("Now you play: ")

function getHumanChoice(humanChoice) {
    return prompt('Choose an option:')
}

console.log(humanChoice)


function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("It's a tie!")
    }

    else if (computerChoice == 'scissors') {
        if (humanChoice == 'paper') {
            computerScore += 1
            return console.log('The computer wins!')
                
        }
        else if (humanChoice == 'rock') {
            humanScore += 1
            return console.log('You win!')
                
        }
    }
    if (computerChoice == 'paper') {
        if (humanChoice == 'rock') {
            computerScore += 1
            return console.log('The computer wins!')
                
        }
        else if (humanChoice == 'scissors') {
            humanScore += 1
            return console.log('You win!')
                
        }
    }
    if (computerChoice == 'rock') {
        if (humanChoice == 'scissors') {
            computerScore += 1
            return console.log('The computer wins!')
                
        }
        else if (humanChoice == 'paper') {
            humanScore += 1
            return console.log('You win!')
                
        }
    }
}

console.log(playRound(humanChoice,computerChoice))


console.log('Your score: ' + humanScore)
console.log('Computer score: ' + computerScore)
if (humanScore > computerScore) {
    console.log('You win!')
}
if (humanScore < computerScore) {
    console.log('The computer wins!')
}

if (humanScore == computerScore) {
    console.log("It's a tie!")
}
