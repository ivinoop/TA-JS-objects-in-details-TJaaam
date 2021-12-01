let form = document.querySelector('.form');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let quizElm = document.querySelector('.quiz');
let showResult = document.querySelector('.show-result');

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return answer === this.options[this.correctAnswerIndex];
  }
  // getCorrectAnswerIndex() {
  //   return this.options[this.correctAnswerIndex];
  // }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }

  handleButtons() {
    if(this.activeIndex === 0) {
      prev.style.visibility = 'hidden';
    } else if(this.activeIndex === (this.questions.length - 1)) {
      next.style.visibility = 'hidden';
      showResult.style.visibility = 'visible';
    } else {
      prev.style.visibility = 'visible';
      next.style.visibility = 'visible';
      showResult.style.visibility = 'hidden';
    }
  }
  addQuestion(title, options, correctAnswerIndex) {
    let question = new Question(title, options, correctAnswerIndex);
    this.questions.push(question);
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
  createUI() {
    quizElm.innerHTML = "";
    let activeQuestion = this.questions[this.activeIndex];
    let form = document.createElement('form');
    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.innerText = activeQuestion.title;
    let optionsElm = document.createElement('div');
    optionsElm.classList.add('options');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'Submit';
    button.type = 'submit';
    buttonWrapper.append(button);

    activeQuestion.options.forEach((option, index) => {
      let input = document.createElement('input');
      let div = document.createElement('div');
      input.id = `option-${index}`;
      input.type = 'radio';
      input.name = 'options';
      input.value = option;
      let label = document.createElement('label');
      label.for = `option-${index}`;
      label.innerText = option;

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if(input.checked) {
          if(activeQuestion.isCorrect(input.value)) {
            this.updateScore();
          }
        }
      })

      div.append(input, label)
      optionsElm.append(div);
    });

    this.handleButtons();

    fieldset.append(legend, optionsElm, buttonWrapper);
    form.append(fieldset);
    quizElm.append(form)
  }
}

function init () {
  let quiz = new Quiz();
  
  questionnaire.forEach((question) => {
    quiz.addQuestion(question.title, question.options, question.correctAnswerIndex);
  });
  
  quiz.createUI();
  
  next.addEventListener('click', quiz.nextQuestion.bind(quiz));
  prev.addEventListener('click', quiz.prevQuestion.bind(quiz));
  showResult.addEventListener('click', () => {
    alert(`Your score is ${quiz.score}`);
  });
}

init(); 