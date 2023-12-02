import type ManageView from './ManageViews'

export default class SelectQuiz {
    animeQuizNode: HTMLDivElement = document.querySelector('#category-anime')!
    mathQuizNode: HTMLDivElement = document.querySelector('#category-math')!
    religionQuizNode: HTMLDivElement =
        document.querySelector('#category-religion')!

    itQuizNode: HTMLDivElement = document.querySelector('#category-it')!

    quizzesViewNode: HTMLDivElement = document.querySelector('#quizzes-view')!

    selectedQuiz: number = 0
    manageViews: ManageView

    onQuizSelected: ((selectedQuiz: number) => void) | undefined

    constructor (manageViews: ManageView) {
        this.addListeners()
        this.manageViews = manageViews
    }

    notifySelected = (): void => {
        if (this.onQuizSelected !== undefined) {
            this.onQuizSelected(this.selectedQuiz)
        }
    }

    onSelectQuiz = (): void => {
        this.notifySelected()
        this.manageViews.changeVisibleSelectQuizView(false)
        this.manageViews.changeVisibleStartQuizView(true)
    }

    addListeners = (): void => {
        this.mathQuizNode.addEventListener('click', (e: Event) => {
            this.selectedQuiz = 1
            this.onSelectQuiz()
        })
        this.itQuizNode.addEventListener('click', (e: Event) => {
            this.selectedQuiz = 2
            this.onSelectQuiz()
        })
        this.religionQuizNode.addEventListener('click', (e: Event) => {
            this.selectedQuiz = 3
            this.onSelectQuiz()
        })
        this.animeQuizNode.addEventListener('click', (e: Event) => {
            this.selectedQuiz = 4
            this.onSelectQuiz()
        })
    }
}
