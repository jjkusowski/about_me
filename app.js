'use strict';
//alert("Hey you!")

// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

// OR  ||
// AND &&

// var userName = prompt('Welcome to my About Me page!  What is your name?');
// alert('Hi, ' + userName + ', nice to meet you.  I wrote a quiz about me.  See if you can answer correctly!');

//Question 1
var answerDaughter = prompt('Do I have a daughter?').toLowerCase();
console.log('answerDaughter is ' + answerDaughter);

if (answerDaughter === 'y' || answerDaughter === 'yes'){
  //Tell user they got it correct
  alert('Correct!  She turns 2 in October and her name is Sarah.');
} else {
  //Tell user they got it wrong
  alert('Whoops!  My daughter\'s name is Sarah and she will be 2 in October.');
}

//Question 2
var answerDog = prompt('Do I have a dog?').toLowerCase();
console.log('answerDog is ' + answerDog);

if (answerDog === 'y' || answerDog === 'yes'){
  //Tell user they got it correct
  alert('Correct!  I have a 90 pound Golden Doodle named Dewey.');
} else {
  //Tell user they got it wrong
  alert('Whoops!  Dewey would be upset with you!  He\'s my 90 pound Golden Doodle');
}
