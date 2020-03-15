import('../scss/main.scss');

const handValues = ['rock', 'paper', 'scissors'];
const buttons = document.getElementById('buttons');
const btnNodeList = buttons.querySelectorAll('.button');
const handLeft = document.querySelector('.hand__img-left');
const handRight = document.querySelector('.hand__img-right');
const resultsMessages = document.querySelector('.results');
const finalResultMessage = document.getElementById('final-result');
const btnReset = document.getElementById('reset');
const score = { player: 0, comp: 0 };
let round = 1;

enableButtons();
btnReset.addEventListener('click', reset);

function enableButtons() {
  btnNodeList.forEach(button => {
    button.addEventListener('click', btnClick);
  });
}

function disableButtons() {
  btnNodeList.forEach(button => {
    button.removeEventListener('click', btnClick);
  });
}

function btnClick() {
  const playerHand = this.id;
  const compHand = compMove();
  const result = compare(playerHand, compHand);
  let roundMessage = `${playerHand} vs ${compHand}, `;
  switch (result) {
    case 'win':
      roundMessage += 'You’ve WON!';
      score.player++;
      break;
    case 'lose':
      roundMessage += 'You’ve LOST!';
      score.comp++;
      break;
    case 'draw':
      roundMessage += `It's a DRAW!`;
      score.player += 0.5;
      score.comp += 0.5;
      break;
    default:
      console.error('Something went wrong while comparing hands');
      return;
      break;
  }
  handLeft.src = `img/${playerHand}.png`;
  handRight.src = `img/${compHand}.png`;
  const roundResult = document.createElement('li');
  roundResult.classList.add('round');
  roundResult.innerHTML = roundMessage;
  resultsMessages.appendChild(roundResult);
  round++;
  if (round > 3) {
    finalResult();
    disableButtons();
  }
}

function compare(handA, handB) {
  const indexA = handValues.findIndex(hand => hand === handA);
  const indexB = handValues.findIndex(hand => hand === handB);
  if (indexA - indexB === 1 || indexA - indexB === -2) {
    return 'win';
  } else if (indexA - indexB === -1 || indexA - indexB === 2) {
    return 'lose';
  } else if (indexA === indexB) {
    return 'draw';
  } else return 'error';
}

function compMove() {
  const indexRnd = Math.floor(Math.random() * 3);
  return handValues[indexRnd];
}

function finalResult() {
  let finalMessage = '';
  if (score.player > score.comp) {
    finalMessage = 'You’ve WON THE GAME!';
  } else if (score.player < score.comp) {
    finalMessage = 'You’ve LOST THE GAME!';
  } else {
    finalMessage = 'The GAME ENDED IN A DRAW!';
  }
  finalMessage += ` The final score is ${score.player}:${score.comp}`;
  finalResultMessage.innerHTML = finalMessage;
}

function reset() {
  score.player = 0;
  score.comp = 0;
  round = 1;
  resultsMessages.innerHTML = '';
  finalResultMessage.innerHTML = '';
  handLeft.src = `img/empty.png`;
  handRight.src = `img/empty.png`;
  enableButtons();
}
