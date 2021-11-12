// Prototypal Pattern

function quizData(title, options, correctAnswerIndex) {
  let question = Object.create(quizMethods);
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  return question;
}

let quizMethods = {
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
};

// Pseudoclassical Pattern

function QuizData(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

QuizData.prototype = {
    getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
};

// Using Class

class Quiz {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
}

// Test Data

let firstQuestion = new Quiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Quiz(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);