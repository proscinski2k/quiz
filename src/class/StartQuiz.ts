import type ManageView from './ManageViews'

export default class StartQuiz {
    quizNameNode: HTMLSpanElement = document.querySelector('#quiz-name')!
    manageViews: ManageView
    startQuizButtonNode: HTMLButtonElement =
        document.querySelector('#start-quiz')!

    startQuiz: () => void

    constructor (manageViews: ManageView, startQuiz: () => void) {
        this.manageViews = manageViews
        this.addEventListeners()
        this.startQuiz = startQuiz
    }

    changeQuizName = (quizName: string): void => {
        this.quizNameNode.innerText = quizName
    }

    addEventListeners = (): void => {
        this.startQuizButtonNode.addEventListener('click', () => {
            this.manageViews.changeVisibleStartQuizView(false)
            this.manageViews.changeVisibleQuizView(true)
            this.startQuiz()
        })
    }
}
