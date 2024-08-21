const choiceArray = ["rock","paper","scissors"];
const buttons = document.querySelectorAll(".btn");
const div = document.querySelector("#div");
var value = "";
var humanScore = 0;
var computerScore = 0;

buttons.forEach((button) => { 
    button.addEventListener("click", function(e){
        value = button.textContent;
        console.log(value);
        playRound(getHumansChoice(),computersChoice());
});
});

function computersChoice(){
    var random = Math.random();
    if(random <= 0.3333333333333333){
        return choiceArray[0];
    }
    if( 0.666666666666666 >= random >= 0.333333333333333){
        return choiceArray[1];
    }
    else{
        return choiceArray[2];
    }
}


function getHumansChoice(){
  
        if(value === "Rock"){
            return choiceArray[0];
        }
        if(value === "Paper"){
            return choiceArray[1];
        }
        if(value === "Scissors"){
            return choiceArray[2];
        }
    
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "rock"){
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;
    }
    if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "paper" && computerChoice === "paper"){
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(humanChoice === "scissors" && computerChoice === "scissors"){
        div.textContent = `The round was a tie! human picked ${humanChoice} and computer picked ${computerChoice} the score is Human: ${humanScore} Computer: ${computerScore}`;

    }
    if(computerScore >= 5){
        div.textContent = "Computer Won The Game With A Score Of 5, If You Would Like To Play Again Press Any Choice.";
        humanScore = 0;
        computerScore = 0;
    }

    if(humanScore >= 5){
        div.textContent = "You Won The Game With A Score Of 5, If You Would Like To Play Again Press Any Choice.";
        humanScore = 0;
        computerScore = 0;
    }
}
