import type ManageView from './ManageViews'

export default class SelectQuiz {
    animeQuizNode: HTMLDivElement = document.querySelector('#category-anime')!
    mathQuizNode: HTMLDivElement = document.querySelector('#category-math')!
    religionQuizNode: HTMLDivElement =
        document.querySelector('#category-religion')!

    itQuizNode: HTMLDivElement = document.querySelector('#category-it')!

    quizzesViewNode: HTMLDivElement = document.querySelector('#quizzes-view')!
    manageViews: ManageView

    onQuizSelected: ((selectedQuiz: number) => void) | undefined

    constructor (manageViews: ManageView) {
        this.addListeners()
        this.manageViews = manageViews
    }

    notifySelected = (quizNumber: number): void => {
        if (this.onQuizSelected !== undefined) {
            this.onQuizSelected(quizNumber)
        }
    }

    onSelectQuiz = (quizNumber: number): void => {
        this.notifySelected(quizNumber)
        this.manageViews.changeVisibleSelectQuizView(false)
        this.manageViews.changeVisibleStartQuizView(true)
    }

    addListeners = (): void => {
        this.mathQuizNode.addEventListener('click', () => {
            this.onSelectQuiz(1)
        })
        this.itQuizNode.addEventListener('click', () => {
            this.onSelectQuiz(2)
        })
        this.religionQuizNode.addEventListener('click', () => {
            this.onSelectQuiz(3)
        })
        this.animeQuizNode.addEventListener('click', () => {
            this.onSelectQuiz(4)
        })
    }
}
