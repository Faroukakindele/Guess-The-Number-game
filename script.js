// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 23;
const buttonElement = document.querySelector('.guess');
let numberAnswer = Math.trunc(Math.random() * 20) + 1;
console.log(numberAnswer);
let score = 20;
let highscoreElement = document.querySelector('.highscore');
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🌏 No Number';
  }
  // when player wins the game
  else if (guess === numberAnswer) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';

    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    console.log(score);
    document.querySelector('.number').textContent = numberAnswer;
    // highsore reset
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess !== numberAnswer) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > numberAnswer ? '🤕Too high' : '🤕Too low';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😥';
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.score').textContent = score;
});

// when the again button is clicked it reset the game and restore it back to the original values;

const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  // random number reset
  numberAnswer = Math.trunc(Math.random() * 20) + 1;
  //   body element,score & messages reset
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
