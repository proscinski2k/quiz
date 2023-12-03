import QuizResultSummary from './QuizResultSummary.js';
export default class Quiz {
    constructor(quizData, manageViews) {
        this.manageViews = manageViews;
        this.quizStartNode = document.querySelector('#quiz-start');
        this.quizNameNode = document.querySelector('#quiz-name');
        this.titleNode = document.querySelector('#quiz-title');
        this.questionNode = document.querySelector('#question');
        this.answersNode = document.querySelector('#answers');
        this.backNode = document.querySelector('#back');
        this.nextNode = document.querySelector('#next');
        this.endNode = document.querySelector('#end');
        this.questionTimeNode = document.querySelector('#question-time');
        this.controlButtonsContainer = document.querySelector('#control-buttons-container');
        this.totalTimeNode = document.querySelector('#total-time');
        this.currentIntervalId = -1;
        this.currentQuestionId = 0;
        this.title = '';
        this.questions = [];
        this.answers = [];
        this.answeredCount = 0;
        this.questionTimers = [];
        this.totalTimer = 0;
        this.finished = false;
        this.questions = quizData.questions.sort(() => Math.random() - 0.5);
        this.title = quizData.title;
        this.answers = Array(this.questions.length)
            .fill({})
            .map(() => ({ answerId: 0, isAnswered: false, isCorrect: false }));
        this.questionTimers = Array(this.questions.length).fill(0);
        this.startCounter();
    }
    initialize() {
        this.renderQuestion();
        this.titleNode.innerText = this.title;
    }
    renderQuestion() {
        const currentQuestion = this.questions[this.currentQuestionId];
        this.questionNode.innerHTML = `(${this.currentQuestionId + 1}/${this.questions.length}) ${currentQuestion.question}`;
        this.renderAnswers();
        this.renderCounters();
    }
    renderAnswers() {
        const isCorrectNode = document.getElementById('is-correct');
        const answer = this.answers[this.currentQuestionId];
        isCorrectNode.innerHTML = '';
        const answered = answer.isAnswered;
        const answeredCorrectly = answered && this.answers[this.currentQuestionId].isCorrect;
        const answersRadio = this.questions[this.currentQuestionId].answers.map((el) => {
            return `<div>
          <input type="radio" name="answer" id="answer-${el.id}" ${answered ? 'disabled' : ''} ${answered && el.id === answer.answerId ? 'checked' : ''} />
          <label  for="answer-${el.id}">${el.content}</label>
      </div>`;
        });
        this.answersNode.innerHTML = answersRadio.join('');
        if (answered && this.finished) {
            isCorrectNode.innerHTML = `<span class="${answeredCorrectly ? 'text-success' : 'text-error'}">${answeredCorrectly ? 'DOBRA ODPOWIEDŹ!' : 'ZŁA ODPOWIEDŹ'}</span>`;
        }
        else if (!answered) {
            const answer = this.answers[this.currentQuestionId];
            this.questions[this.currentQuestionId].answers.forEach((el) => {
                var _a;
                (_a = document
                    .getElementById(`answer-${el.id}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('input', () => {
                    if (!answer.isAnswered) {
                        this.answeredCount++;
                    }
                    this.answers[this.currentQuestionId].answerId = el.id;
                    this.answers[this.currentQuestionId].isAnswered = true;
                    this.answers[this.currentQuestionId].isCorrect =
                        el.id ===
                            this.questions[this.currentQuestionId].correctAnswer;
                    this.renderButtons();
                });
            });
        }
        this.renderButtons();
    }
    renderButtons() {
        this.controlButtonsContainer.innerHTML = `
        <div>
            <button class="btn btn-primary" id="back" ${this.currentQuestionId === 0 ? 'disabled' : ''}>
                Poprzednie
                <i class="bi bi-arrow-left"></i>
            </button>
            <button class="btn btn-primary" id="next" ${this.currentQuestionId === this.questions.length - 1
            ? 'disabled'
            : ''}>
                Następne
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
        <button class="btn btn-outline btn-error" id="end" ${this.answeredCount === this.questions.length && !this.finished
            ? ''
            : 'disabled'}>
            Zakończ
            <i class="bi bi-check-lg"></i>
        </button>
        `;
        this.backNode = document.querySelector('#back');
        this.nextNode = document.querySelector('#next');
        this.endNode = document.querySelector('#end');
        this.nextNode.addEventListener('click', (e) => {
            if (this.currentQuestionId >= this.questions.length - 1)
                return;
            e.preventDefault();
            e.stopPropagation();
            this.currentQuestionId++;
            this.renderQuestion();
        });
        this.backNode.addEventListener('click', (e) => {
            if (this.currentQuestionId <= 0)
                return;
            e.preventDefault();
            e.stopPropagation();
            this.currentQuestionId--;
            this.renderQuestion();
        });
        this.endNode.addEventListener('click', (e) => {
            if (this.finished || this.answeredCount !== this.questions.length) {
                return;
            }
            this.finished = true;
            e.preventDefault();
            e.stopPropagation();
            this.stopCounter();
            this.renderQuestion();
            this.quizResult = { quizName: this.title, answers: this.answers };
            this.saveScoreToLocalStorage();
            this.showSummary();
        });
    }
    startCounter() {
        this.currentIntervalId = setInterval(() => {
            if (this.finished)
                return;
            this.questionTimers[this.currentQuestionId]++;
            this.totalTimer++;
            this.renderCounters();
        }, 1000);
    }
    stopCounter() {
        clearInterval(this.currentIntervalId);
        this.questionTimeNode.innerHTML = `${this.questionTimers[this.currentQuestionId]}`;
    }
    renderCounters() {
        this.questionTimeNode.innerHTML = `${this.questionTimers[this.currentQuestionId]}`;
        this.totalTimeNode.innerHTML = `${this.totalTimer}`;
    }
    exitQuiz() {
        this.stopCounter();
    }
    showSummary() {
        const quizResultSummary = new QuizResultSummary(this.quizResult);
        this.manageViews.changeVisibleSummaryView(true);
    }
    saveScoreToLocalStorage() {
        const finishedQuizzesLocalStorage = JSON.parse(localStorage.getItem('cool-quiz') || '[]');
        const finishedQuizzes = finishedQuizzesLocalStorage
            ? finishedQuizzesLocalStorage
            : [];
        localStorage.setItem('cool-quiz', JSON.stringify([...finishedQuizzes, this.quizResult]));
    }
}
