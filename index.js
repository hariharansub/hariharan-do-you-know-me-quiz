import chalk from 'chalk';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var readLineSync = require('readline-sync');
var userName = readLineSync.question("Enter your name : ");
console.log("\n");
console.log(chalk.blue('Welcome '+userName+' to the "Do you know Hari" quiz!'));
console.log(chalk.blue("Let's see how much you actually know him :P"));
console.log("-----------------------");

var score=0;

var highScore = {
    name: "Pavan",
    score: "3"
  }

function play(questions){
  for(var i=0;i<questions.length;i++){
    var userAnswer = readLineSync.question(questions[i].question);
    if (userAnswer == questions[i].answer){
      console.log(chalk.greenBright("You are right :)"));
      score++;
      console.log("Your current score is "+score);
    }
    else{
      console.log(chalk.redBright("You are wrong :("));
      console.log("Your current score is "+score);
    }
    console.log("-----------------------");
  }
  return score;
}

var questions = [
  {
    question: "1. How old is Hari ?\n",
    answer: "24"
  },
  {
    question: "2. Where does hari live ?\n",
    answer: "chennai"
  },
  {
    question: "3. Which is Hari's most favourite city in India ?\n",
    answer: "pune"
  },{
    question: "4. Who is Hari's most favourite superhero ?\n",
    answer: "batman"
  },{
    question: "5. Which football club does hari follow ? Arsenal/Liverpool/Barcelona/PSG/Manchester United\n",
    answer: "Barcelona"
  }
]

console.log("Please enter your answers in small letters !");
console.log("\n");
var finalScore = play(questions);
console.log("\n");
console.log("Your final score is "+finalScore);
if (finalScore >= highScore.score){
  console.log(chalk.yellowBright("Congratulations !!"));
  console.log(chalk.yellowBright("You are the current high scorer in the game"));
  highScore.name=userName;
  highScore.score=finalScore;
  console.log("-----------------------");
}

console.log("Current high score is");
console.log("Name : "+highScore.name);
console.log("Score : "+highScore.score);
console.log("\n");
console.log("Please refresh the screen to restart the quiz !!");