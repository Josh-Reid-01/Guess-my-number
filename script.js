'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMsg('No number');
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // document.querySelector('.message').textContent = 'correct number';
    displayMsg('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';
      displayMsg(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent =
      //   'You have lost your score is 0';
      displayMsg('Your score is 0 you lost');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
});
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You have lost your score is 0';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You have lost your score is 0';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMsg('Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
});
