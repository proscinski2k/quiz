export default class Quiz {
    constructor(quizData) {
        this.animeQuizNode = document.querySelector('category-anime');
        this.mathQuizNoe = document.querySelector('category-math');
        this.religionQuizNode = document.querySelector('category-religion');
        this.itQuizNoder = document.querySelector('category-it');
        this.quizStartNode = document.querySelector('#quiz-start');
        this.quizNameNode = document.querySelector('#quiz-name');
        this.titleNode = document.querySelector('#quiz-title');
        this.questionNode = document.querySelector('#question');
        this.answersNode = document.querySelector('#answers');
        this.backNode = document.querySelector('#back');
        this.nextNode = document.querySelector('#next');
        this.endNode = document.querySelector('#end');
        this.questionTimeNode = document.querySelector('#question-time');
        this.totalTimeNode = document.querySelector('#total-time');
        this.currentIntervalId = -1;
        this.currentQuestionId = 0;
        this.title = '';
        this.questions = [];
        this.questions = quizData.questions;
        this.title = quizData.title;
    }
    initialize() {
        this.nextNode.addEventListener('click', (e) => {
            if (this.currentQuestionId >= this.questions.length - 1)
                return;
            e.preventDefault();
            e.stopPropagation();
            this.stopCounter();
            this.currentQuestionId++;
            this.renderQuestion();
        });
        this.backNode.addEventListener('click', (e) => {
            if (this.currentQuestionId <= 0)
                return;
            e.preventDefault();
            e.stopPropagation();
            this.stopCounter();
            this.currentQuestionId--;
            this.renderQuestion();
        });
        this.renderQuestion();
        this.titleNode.innerText = this.title;
    }
    finish() { }
    renderQuestion() {
        console.log(`Aktualne pytanie: ${this.currentQuestionId}`);
        const currentQuestion = this.questions[this.currentQuestionId];
        this.questionNode.innerHTML = currentQuestion.question;
        this.renderAnswers();
        this.startCounter();
    }
    renderAnswers() {
        const answersRadio = this.questions[this.currentQuestionId].answers.map((answer) => {
            return `<div>
          <input type="radio" name="answer" id="${answer.id}" value="${answer.content}" />
          <label  for="${answer.id}">${answer.content}</label>
      </div>`;
        });
        this.answersNode.innerHTML = answersRadio.join('');
    }
    nextQuestion(e) {
        e.preventDefault();
        e.stopPropagation();
        this.stopCounter();
        this.currentQuestionId++;
        this.renderQuestion();
    }
    startCounter() {
        let time = 0;
        this.currentIntervalId = setInterval(() => {
            this.questionTimeNode.innerHTML = `${++time}`;
        }, 1000);
    }
    stopCounter() {
        clearInterval(this.currentIntervalId);
        this.questionTimeNode.innerHTML = '0';
    }
}
