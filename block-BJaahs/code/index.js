// Without Object

let title ="title";
let options = ['option 1', 'option 2', 'option 3', 'option 4'];
let correctAnswerIndex = 1;
function isAnswerCorrect (index) {
  return index === correctAnswerIndex;
}
function getCorrectAnswer () {
  return options[correctAnswerIndex];
}
// With Object

let singleQ = {
  title: 'title',
  options: ['option 1', 'option 2', 'option 3', 'option 4'],
  correctAnswerIndex: 1,
  isAnswerCorrect (index) {
    return index === singleQ.correctAnswerIndex;
  },
  getCorrectAnswer () {
    return singleQ.options[correctAnswerIndex];
  }
};


// Using function to create object

function createQuestion (title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return index === question.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return question.options[correctAnswerIndex];
  };
  return question;
}

// Using `this` keyword

function createQuestionWithThis (title, options, correctAnswerIndex) {
  let questionWithThis = {};
  questionWithThis.title = 'title';
  questionWithThis.options = options;
  questionWithThis.correctAnswerIndex = correctAnswerIndex;
  questionWithThis.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return this.options[correctAnswerIndex];
  };
  return questionWithThis;
}

