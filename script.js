let humanScore = 0;
let computerScore = 0;

const tieMessage = "It's a tie!";
const lossMessage = "You lose!";
const winMessage = "You win!";

const resultsContainer = document.querySelector("#results");

function getComputerChoice(){
  let number = Math.random();

  // for each third of the range of possible results, assign a choice
  if(number <= 0.33){
    return "rock";
  }
  else if(number <= 0.66){
    return "paper";
  }
  else {
    return "scissors";
  }
}

function displayResults(){
  const results = document.createElement("p");

  if(humanScore > computerScore) results.textContent = `🎉 You win with ${humanScore} points 🎉`;
  else if (humanScore < computerScore) results.textContent = `☹️ You lose ${humanScore} to ${computerScore} ☹️`;
  else results.textContent = `🤷 It's a tie at both ${humanScore} points 🤷`;
  
  resultsContainer.appendChild(results);
}

function playRound(){
  const humanChoice = this.value;
  const computerChoice = getComputerChoice();
  const roundResult = document.createElement("p");

  if(humanChoice === "rock"){
    if(computerChoice === "rock") roundResult.textContent = tieMessage;
    else if (computerChoice === "paper"){
      roundResult.textContent = lossMessage;
      computerScore++;
    } 
    else{
      roundResult.textContent = winMessage;
      humanScore++;
    } 
  }
  else if(humanChoice === "paper") {
    if(computerChoice === "paper") roundResult.textContent = tieMessage;
    else if (computerChoice === "scissors"){
      roundResult.textContent = lossMessage;
      computerScore++;
    }
    else{
      roundResult.textContent = winMessage;
      humanScore++;
    } 
  }
  else {
    if(computerChoice === "scissors") roundResult.textContent = tieMessage;
    else if (computerChoice === "rock"){
      roundResult.textContent = lossMessage;
      computerScore++;
    } 
    else{
      roundResult.textContent = winMessage;
      humanScore++;
    } 
  }

  roundResult.textContent += ` Human: ${humanScore} | Computer: ${computerScore}`; 

  resultsContainer.appendChild(roundResult);

  if(humanScore === 5 || computerScore === 5){
    document.querySelectorAll("button").forEach((button) => {
      button.removeEventListener("click", playRound);
    });
    
    displayResults();
  }
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", playRound);
});
