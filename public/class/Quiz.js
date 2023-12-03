export default class Quiz {
    constructor(quizData) {
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
        this.answers = Array(this.questions.length).fill(null);
        this.questionTimers = Array(this.questions.length).fill(0);
        this.startCounter();
    }
    initialize() {
        this.renderQuestion();
        this.titleNode.innerText = this.title;
    }
    finish() { }
    renderQuestion() {
        console.log(`Aktualne pytanie: ${this.currentQuestionId}`);
        const currentQuestion = this.questions[this.currentQuestionId];
        this.questionNode.innerHTML = `(${this.currentQuestionId + 1}/${this.questions.length}) ${currentQuestion.question}`;
        this.renderAnswers();
        this.renderCounters();
    }
    renderAnswers() {
        const isCorrectNode = document.getElementById('is-correct');
        isCorrectNode.innerHTML = '';
        const answered = !!this.answers[this.currentQuestionId];
        const answeredCorrectly = answered &&
            this.questions[this.currentQuestionId].correctAnswer ==
                this.answers[this.currentQuestionId];
        const answersRadio = this.questions[this.currentQuestionId].answers.map((answer) => {
            return `<div>
          <input type="radio" name="answer" id="answer-${answer.id}" ${answered ? 'disabled' : ''} ${answered && answer.id == this.answers[this.currentQuestionId]
                ? 'checked'
                : ''} />
          <label  for="answer-${answer.id}">${answer.content}</label>
      </div>`;
        });
        this.answersNode.innerHTML = answersRadio.join('');
        if (answered && this.finished) {
            isCorrectNode.innerHTML = `<span class="${answeredCorrectly ? 'text-green-500' : 'text-red-500'}">${answeredCorrectly ? 'DOBRA ODPOWIEDŹ!' : 'ZŁA ODPOWIEDŹ'}</span>`;
        }
        else if (!answered) {
            this.questions[this.currentQuestionId].answers.forEach((answer) => {
                var _a;
                (_a = document
                    .getElementById(`answer-${answer.id}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('input', () => {
                    if (!this.answers[this.currentQuestionId])
                        this.answeredCount++;
                    this.answers[this.currentQuestionId] = answer.id;
                    this.renderButtons();
                });
            });
        }
        this.renderButtons();
    }
    renderButtons() {
        this.controlButtonsContainer.innerHTML = `
        <div>
            <button class="btn btn-primary" id="back" ${this.currentQuestionId == 0 ? 'disabled' : ''}>
                Poprzednie
                <i class="bi bi-arrow-left"></i>
            </button>
            <button class="btn btn-primary" id="next" ${this.currentQuestionId == this.questions.length - 1
            ? 'disabled'
            : ''}>
                Następne
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
        <button class="btn btn-outline btn-error" id="end" ${this.answeredCount == this.questions.length && !this.finished
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
            // this.stopCounter()
            this.currentQuestionId++;
            this.renderQuestion();
        });
        this.backNode.addEventListener('click', (e) => {
            if (this.currentQuestionId <= 0)
                return;
            e.preventDefault();
            e.stopPropagation();
            // this.stopCounter()
            this.currentQuestionId--;
            this.renderQuestion();
        });
        this.endNode.addEventListener('click', (e) => {
            if (this.finished || this.answeredCount != this.questions.length)
                return;
            this.finished = true;
            e.preventDefault();
            e.stopPropagation();
            this.stopCounter();
            this.renderQuestion();
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
    saveScoreToLocalStorage() { }
}
