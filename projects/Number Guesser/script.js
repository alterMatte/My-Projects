let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, comGuess, targetNumber) => {
  const userRange = Math.abs(userGuess - targetNumber);
  const comRange = Math.abs(comGuess - targetNumber);
  if(userRange < comRange || userRange === targetNumber){
    return true;
  }else if(userRange > comRange){
    return false;
  }
}

const updateScore = (winner) => {
  switch (winner){
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

const advanceRound = () => {
 currentRoundNumber++; 
}
