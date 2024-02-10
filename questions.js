const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let currentQuestionIndex = 0;
let questions = [];

// Load questions from JSON file
function getQuestions() {
  try {
    const data = fs.readFileSync('questions.json');
    questions = JSON.parse(data);
  } catch (error) {
    console.error('Error reading questions file:', error);
    process.exit(1);
  }
}

// Display question and options
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  console.log(`\n${question.text}`);
  question.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
}

// Check answer and update score 
function checkAnswer(answer) {
  const question = questions[currentQuestionIndex];
  if (answer.toLowerCase() === question.answer.toLowerCase()) {
    console.log('Correct!');
    score++;
  } else {
    console.log(`Incorrect. Correct answer is: ${question.answer}`);
  }
}

function displayScore() {
  console.log(`\nYour final score is: ${score}/${questions.length}`);
  rl.close();
}

function startQuiz() {
  getQuestions();
  displayQuestion();
  rl.question('\nEnter your answer: ', (answer) => {
    checkAnswer(answer);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      startQuiz();
    } else {
      displayScore();
    }
  });
}

// Questions data
const questionsContents = `[
  {
    "text": "What is the capital of France?",
    "options": ["London", "Paris", "Berlin", "Rome"],
    "answer": "Paris"
  },
  {
    "text": "What is the largest planet in our solar system?",
    "options": ["Mars", "Venus", "Jupiter", "Saturn"],
    "answer": "Jupiter"
  }
]`;

// Write questions data to JSON file
fs.writeFileSync('questions.json', questionsContents);

// Start the quiz when the script runs
startQuiz();
