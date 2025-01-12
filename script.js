function getComputerChoice(){
  // SET number to a random number between 0 and 1
  let number = Math.random();
  // IF number is less than or equal to 0.33:
  if(number <= 0.33){
    // Choose rock
    return "rock";
  }
  // ELSE IF number is less than or equal to 0.66:
  else if(number <= 0.66){
    // Choose paper
    return "paper";
  }
  // ELSE:
  else {
    // Choose scissors
    return "scissors";
  }
    // ENDIF
}

function getHumanChoice(){
  // GET user choice
  // SET user choice to lowercase
  let choice = (prompt(`Choose between "rock", "paper", and "scissors": `)).toLowerCase();
  // WHILE choice is invalid
  while(true){
    // IF choice is "rock", "paper", or "scissors":
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
      // Accept choice
      return choice;
    }
    // ELSE:
    else{
      // Ask user for choice again
      alert("Invalid choice.");
      choice = prompt(`Choose between "rock", "paper", and "scissors": `);
    }
    // ENDIF
  }
  // ENDWHILE
}


function playGame(){
  // INIT human score to 0
  let humanScore = 0;
  // INIT computer score to 0
  let computerScore = 0;
  
  // SET tie, loss, and win messages
  const tieMessage = "It's a tie!";
  const lossMessage = "You lose!";
  const winMessage = "You win!";
  
  function playRound(){
    // GET human choice
    const humanChoice = getHumanChoice();
    // GET computer choice
    const computerChoice = getComputerChoice();
    // IF humanChoice is rock
    if(humanChoice === "rock"){
      // IF computerChoice is rock
      // PRINT tie message
      if(computerChoice === "rock") console.log(tieMessage);
      // ELSE IF computerChoice is paper
      else if (computerChoice === "paper"){
        // PRINT loss message
        console.log(lossMessage);
        // ICNREMENT computerScore
        computerScore++;
      } 
      // ELSE
      else{
        // PRINT win message
        console.log(winMessage);
        // INCREMENT humanScore
        humanScore++;
      } 
      // ENDIF
    }
    // ELSE IF humanChoice is paper
    else if(humanChoice === "paper") {
      // IF computerChoice is paper
      // PRINT tie message
      if(computerChoice === "paper") console.log(tieMessage);
      // ELSE IF computerChoice is scissors
      else if (computerChoice === "scissors"){
        // PRINT loss message
        console.log(lossMessage);
        // ICNREMENT computerScore
        computerScore++;
      }
      // ELSE
      else{
        // PRINT win message
        console.log(winMessage);
        // INCREMENT humanScore
        humanScore++;
      } 
      // ENDIF
    }
    // ELSE when humanChoice is scissors
    else {
      // IF computerChoice is scissors
      // PRINT tie message
      if(computerChoice === "scissors") console.log(tieMessage);
      // ELSE IF computerChoice is rock
      else if (computerChoice === "rock"){
        // PRINT loss message
        console.log(lossMessage);
        // ICNREMENT computerScore
        computerScore++;
      } 
      // ELSE
      else{
        // PRINT win message
        console.log(winMessage);
        // INCREMENT humanScore
        humanScore++;
      } 
      // ENDIF
    }
    // ENDIF
  }

  // INIT round number to 0
  let roundNumber = 0;
  // WHILE round number < 5
  while(roundNumber < 5){
    playRound();
    // INCREMENT round number
    roundNumber++;
  }
  // ENDWHILE

  // IF human score > computer score
  // PRINT win message and score
  if(humanScore > computerScore) console.log(`You win with ${humanScore} points`);
  // ELSE IF human score < computer score
  // PRINT loss message and score
  else if (humanScore < computerScore) console.log(`You lose ${humanScore} to ${computerScore}`);
  // ELSE
  // PRINT tie message and score
  else console.log(`It's a tie at both ${humanScore} points`);
  // ENDIF
}

playGame();