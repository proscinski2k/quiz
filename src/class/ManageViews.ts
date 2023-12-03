export default class ManageView {
    // HOME PAGE
    quizzesSelectViewNode: HTMLDivElement = document.querySelector('#quizzes-view')!
    // PICKED QUIZ *VALUE* [BACK TO QUIZZES | START QUIZ]
    quizStartViewNode: HTMLDivElement = document.querySelector('#quiz-start-view')!
    // QUIZ VIEW
    quizViewNode: HTMLDivElement = document.querySelector('#quiz-view')!
    // AUTHORS VIEW
    authorsViewNode: HTMLDialogElement = document.querySelector('#authors-view')!
    backToQuizzesViewNodes: NodeListOf<Element> = document.querySelectorAll('.back-to-quizzes-view')!
    btnGoToAuthorsViewNode: HTMLButtonElement = document.querySelector('#button-go-to-authors-view')!
    endQuiz: () => void

    constructor (endQuiz: () => void) {
        this.addEventListeners()
        this.endQuiz = endQuiz
    }

    changeVisibleSelectQuizView = (visible: boolean): void => {
        const quizzesSelectView = this.quizzesSelectViewNode.classList
        if (visible) quizzesSelectView.remove('hidden')
        else quizzesSelectView.add('hidden')
    }

    changeVisibleStartQuizView = (visible: boolean): void => {
        const quizStartView = this.quizStartViewNode.classList
        if (visible) quizStartView.remove('hidden')
        else quizStartView.add('hidden')
    }

    changeVisibleQuizView = (visible: boolean): void => {
        const quizView = this.quizViewNode.classList
        if (visible) quizView.remove('hidden')
        else quizView.add('hidden')
    }

    changeVisibleAuthorsView = (visible: boolean): void => {
        const authorsView = this.authorsViewNode.classList
        if (visible) authorsView.remove('hidden')
        else authorsView.add('hidden')
    }

    hideAllViews = (): void => {
        this.changeVisibleAuthorsView(false)
        this.changeVisibleStartQuizView(false)
        this.changeVisibleQuizView(false)
        this.changeVisibleSelectQuizView(false)
    }

    addEventListeners = (): void => {
        this.backToQuizzesViewNodes.forEach(element => {
            element.addEventListener('click', () => {
                this.hideAllViews()
                this.changeVisibleSelectQuizView(true)
                this.endQuiz()
            })
        })
        this.btnGoToAuthorsViewNode.addEventListener('click', () => {
            this.hideAllViews()
            this.changeVisibleAuthorsView(true)
            this.endQuiz()
        })
    }
}
