import { QuizResult } from '../interfaces/quiz.interface'

export default class QuizResultSummary {
    correctAnswersNode: HTMLSpanElement = document.querySelector(
        '#quiz-result-summary__correct-answers',
    )!
    stepsNode: HTMLSpanElement = document.querySelector(
        '#quiz-result-summary__steps',
    )!

    progressNode: HTMLDivElement = document.querySelector('#progress-bar')!

    constructor(quizResult: QuizResult) {
        const correctAnswers = quizResult.answers.filter(
            (el) => el.isCorrect,
        ).length
        this.correctAnswersNode.innerText = String(correctAnswers)
        this.stepsNode.innerHTML = this.getSteps(quizResult)
        this.setProgress(correctAnswers, quizResult.answers.length)
    }

    setProgress(correctAnswers: number, answersCount: number): void {
        const percentage = (correctAnswers / answersCount) * 100
        this.progressNode.style.setProperty('--value', String(percentage))
        this.progressNode.innerText = `${String(percentage)}%`
        this.progressNode.classList.remove(
            'text-success',
            'text-error',
            'text-warning',
        )
        if (percentage <= 40) this.progressNode.classList.add('text-error')
        else if (percentage <= 60)
            this.progressNode.classList.add('text-warning')
        else this.progressNode.classList.add('text-success')
    }

    getSteps(quizResult: QuizResult): string {
        const htmlElements: string = quizResult.answers
            .map((el) => {
                return el.isCorrect
                    ? `<li class="step step-success">DOBRA ODPOWIEDŹ!</li>`
                    : `<li class="step step-error">ZŁA ODPOWIEDŹ</li>`
            })
            .join('')

        const htmlWrapper: string = `<ul class="steps steps-vertical">${htmlElements}</ul>`
        return htmlWrapper
    }
}
