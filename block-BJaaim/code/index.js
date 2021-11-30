class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return answer === this.options[this.correctAnswerIndex];
  }
  getCorrectAnswerIndex() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(allQuestions = [], score = 0) {
    this.allQuestions - allQuestions;
    this.score = score;
    this.activeIndex = 0;
  }
  updateScore() {
    this.score += 1;
  }
  nextQuestion() {
    this.activeIndex += 1;
    this.createUI();
  }
  prevQuestion() {
    this.activeIndex -= 1;
    this.createUI();
  }
}