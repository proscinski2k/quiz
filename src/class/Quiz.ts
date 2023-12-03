import {
    QuizResult,
    type QuizData,
    AnswersResult,
} from '../interfaces/quiz.interface'
import ManageView from './ManageViews'

import { type Question } from './Question.js'
import QuizResultSummary from './QuizResultSummary.js'

export default class Quiz {
    quizStartNode: HTMLDivElement = document.querySelector('#quiz-start')!
    quizNameNode: HTMLSpanElement = document.querySelector('#quiz-name')!
    titleNode: HTMLHeadElement = document.querySelector('#quiz-title')!
    questionNode: HTMLSpanElement = document.querySelector('#question')!
    answersNode: HTMLDivElement = document.querySelector('#answers')!
    backNode: HTMLButtonElement = document.querySelector('#back')!
    nextNode: HTMLButtonElement = document.querySelector('#next')!
    endNode: HTMLButtonElement = document.querySelector('#end')!
    questionTimeNode: HTMLSpanElement =
        document.querySelector('#question-time')!

    controlButtonsContainer: HTMLElement = document.querySelector(
        '#control-buttons-container',
    )!

    totalTimeNode: HTMLSpanElement = document.querySelector('#total-time')!

    currentIntervalId: number = -1
    currentQuestionId: number = 0

    title: string = ''
    questions: Question[] = []

    answers: AnswersResult[] = []

    answeredCount: number = 0

    questionTimers: number[] = []
    totalTimer: number = 0

    finished: boolean = false

    quizResult?: QuizResult

    constructor(
        quizData: QuizData,
        public manageViews: ManageView,
    ) {
        this.questions = quizData.questions.sort(() => Math.random() - 0.5)
        this.title = quizData.title
        this.answers = Array(this.questions.length)
            .fill({})
            .map(() => ({ answerId: 0, isAnswered: false, isCorrect: false }))
        this.questionTimers = Array(this.questions.length).fill(0)
        this.startCounter()
    }

    initialize(): void {
        this.renderQuestion()
        this.titleNode.innerText = this.title
    }

    renderQuestion(): void {
        const currentQuestion: Question = this.questions[this.currentQuestionId]
        this.questionNode.innerHTML = `(${this.currentQuestionId + 1}/${
            this.questions.length
        }) ${currentQuestion.question}`
        this.renderAnswers()
        this.renderCounters()
    }

    renderAnswers(): void {
        const isCorrectNode = document.getElementById('is-correct')!
        const answer = this.answers[this.currentQuestionId]
        isCorrectNode.innerHTML = ''
        const answered = answer.isAnswered
        const answeredCorrectly =
            answered && this.answers[this.currentQuestionId].isCorrect
        const answersRadio: string[] = this.questions[
            this.currentQuestionId
        ].answers.map((el) => {
            return `<div>
          <input type="radio" name="answer" id="answer-${el.id}" ${
              answered ? 'disabled' : ''
          } ${answered && el.id === answer.answerId ? 'checked' : ''} />
          <label  for="answer-${el.id}">${el.content}</label>
      </div>`
        })

        this.answersNode.innerHTML = answersRadio.join('')

        if (answered && this.finished) {
            isCorrectNode.innerHTML = `<span class="${
                answeredCorrectly ? 'text-success' : 'text-error'
            }">${
                answeredCorrectly ? 'DOBRA ODPOWIEDŹ!' : 'ZŁA ODPOWIEDŹ'
            }</span>`
        } else if (!answered) {
            const answer = this.answers[this.currentQuestionId]
            this.questions[this.currentQuestionId].answers.forEach((el) => {
                document
                    .getElementById(`answer-${el.id}`)
                    ?.addEventListener('input', () => {
                        if (!answer.isAnswered) {
                            this.answeredCount++
                        }
                        this.answers[this.currentQuestionId].answerId = el.id
                        this.answers[this.currentQuestionId].isAnswered = true
                        this.answers[this.currentQuestionId].isCorrect =
                            el.id ===
                            this.questions[this.currentQuestionId].correctAnswer
                        this.renderButtons()
                    })
            })
        }

        this.renderButtons()
    }

    renderButtons(): void {
        this.controlButtonsContainer.innerHTML = `
        <div>
            <button class="btn btn-primary" id="back" ${
                this.currentQuestionId === 0 ? 'disabled' : ''
            }>
                Poprzednie
                <i class="bi bi-arrow-left"></i>
            </button>
            <button class="btn btn-primary" id="next" ${
                this.currentQuestionId === this.questions.length - 1
                    ? 'disabled'
                    : ''
            }>
                Następne
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
        <button class="btn btn-outline btn-error" id="end" ${
            this.answeredCount === this.questions.length && !this.finished
                ? ''
                : 'disabled'
        }>
            Zakończ
            <i class="bi bi-check-lg"></i>
        </button>
        `
        this.backNode = document.querySelector('#back')!
        this.nextNode = document.querySelector('#next')!
        this.endNode = document.querySelector('#end')!

        this.nextNode.addEventListener('click', (e) => {
            if (this.currentQuestionId >= this.questions.length - 1) return
            e.preventDefault()
            e.stopPropagation()
            this.currentQuestionId++
            this.renderQuestion()
        })

        this.backNode.addEventListener('click', (e) => {
            if (this.currentQuestionId <= 0) return
            e.preventDefault()
            e.stopPropagation()
            this.currentQuestionId--
            this.renderQuestion()
        })

        this.endNode.addEventListener('click', (e) => {
            if (this.finished || this.answeredCount !== this.questions.length) {
                return
            }
            this.finished = true
            e.preventDefault()
            e.stopPropagation()
            this.stopCounter()
            this.renderQuestion()
            this.quizResult = { quizName: this.title, answers: this.answers }
            this.saveScoreToLocalStorage()
            this.showSummary()
        })
    }

    startCounter(): void {
        this.currentIntervalId = setInterval(() => {
            if (this.finished) return
            this.questionTimers[this.currentQuestionId]++
            this.totalTimer++
            this.renderCounters()
        }, 1000)
    }

    stopCounter(): void {
        clearInterval(this.currentIntervalId)
        this.questionTimeNode.innerHTML = `${
            this.questionTimers[this.currentQuestionId]
        }`
    }

    renderCounters(): void {
        this.questionTimeNode.innerHTML = `${
            this.questionTimers[this.currentQuestionId]
        }`
        this.totalTimeNode.innerHTML = `${this.totalTimer}`
    }

    exitQuiz(): void {
        this.stopCounter()
    }

    showSummary(): void {
        const quizResultSummary = new QuizResultSummary(this.quizResult!)
        this.manageViews.changeVisibleSummaryView(true)
    }

    saveScoreToLocalStorage(): void {
        const finishedQuizzesLocalStorage: QuizResult[] | null = JSON.parse(
            localStorage.getItem('cool-quiz') || '[]',
        )

        const finishedQuizzes = finishedQuizzesLocalStorage
            ? finishedQuizzesLocalStorage
            : []
        localStorage.setItem(
            'cool-quiz',
            JSON.stringify([...finishedQuizzes, this.quizResult]),
        )
    }
}
