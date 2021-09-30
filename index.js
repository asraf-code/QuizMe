var readlineSync =  require("readline-sync")

var userAnswer = readlineSync.question("What is your name? ");
console.log("--------")
console.log("Welcome "+ userAnswer  + " to HOW WELL DO YOU KNOW ME?");
console.log("--------")
console.log("Answer the following questions")

var score = 0 

// data of high scores 
var highScores = [
  { 
    name: "Sarah",
    score: 8,
  },

  {
    name: "Thomas",
    score: 9,
  }
]


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right! ");
    score = score + 1;
  } else { 
    console.log("You are wrong! ");
  }
  
  console.log("Current Score", score);
  console.log("--------");
}

var questions = [{
  question: "Where am I from? ",
  answer: "chennai"
},
{
  question: "Am I older then 28? ",
  answer: "yes"
},
{
  question: "What colour do I prefer? ",
    answer: "red"
}]

for (var i = 0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer)
  
}

console.log("Your score is: ", score);

console.log("Check our the Highscores", highScores)

// if (score === highScores.score) {
//   console.log("You are No.1! ")
// }