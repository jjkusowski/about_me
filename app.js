'use strict';

var userName = prompt('Welcome to my About Me page!  What is your name?');
alert('Hi, ' + userName + ', nice to meet you.  I wrote a quiz about me.  See if you can answer correctly!');

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
  alert('Whoops!  Dewey would be upset with you!  He\'s my 90 pound Golden Doodle.');
}

//Question 3
var answerBook = prompt('Have I written a New York Times Best Seller book?').toLowerCase();
console.log('answerBook is ' + answerBook);

if (answerBook === 'n' || answerBook === 'no'){
  //Tell user they got it correct
  alert('Couldn\'t fool you!  That would be amazing, but I have not.');
} else {
  //Tell user they got it wrong
  alert('Really?!?  I have some land in Forks to sell you.');
}

//Question 4
var answerHome = prompt('Do I live in Seattle?').toLowerCase();
console.log('answerHome is ' + answerHome);

if (answerHome === 'y' || answerHome === 'yes'){
  //Tell user they got it correct
  alert('Yes!  I live in West Seattle.');
} else {
  //Tell user they got it wrong
  alert('Sorry!  I do live in Seattle.  West Seattle, in particular.');
}

//Question 5
var answerLions = prompt('Are the Detroit Lions my favorite NFL team?').toLowerCase();
console.log('answerLions is ' + answerLions);

if (answerLions === 'y' || answerLions === 'yes'){
  //Tell user they got it correct
  alert('You know it!  And they are going to win the Super Bowl! (No they won\'t.)');
} else {
  //Tell user they got it wrong
  alert('You barely know me!  It\'s rough, but I love my Lions.');
}

//Question 6
var myNumber = Math.floor((Math.random() * 10) + 1);
console.log('myNumber is: ' + myNumber);

for (var i = 0; i < 5; i++) {
  //Check if user is out of tries
  if (i === 4) {
    //tell user the correct number and that they are out of tries and break
    alert('I\'m sorry.  You are out of tries.  The correct number is ' + myNumber + '. Move on to the next question.');
  } else {
    var userNumber = parseInt(prompt("Please pick a number between 1 and 10."));
    console.log('userNumber is: ' + userNumber + ' Match? ' + (userNumber === myNumber));
    if (userNumber === myNumber){
      //Hooray!  Increment score.  Break.
      alert('You are correct!  It is ' + myNumber + '.  On to the next question!');
      break;
    } else if (userNumber < myNumber){
      //Too low.
      alert('Sorry! My number is higher than ' + userNumber + '.');
    } else if (userNumber > myNumber){
      //Too high.
      alert('Sorry! My number is lower than ' + userNumber + '.');
    } else {
      //I didn't understand your input.
      alert('I didn\'t understand you.  Make sure your number is a whole number between 1 and 10.');
    }

  }

}
