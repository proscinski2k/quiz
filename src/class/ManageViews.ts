export default class ManageView {
    // HOME PAGE
    quizzesSelectViewNode: HTMLDivElement = document.querySelector('#quizzes-view')!
    // PICKED QUIZ *VALUE* [BACK TO QUIZZES | START QUIZ]
    quizStartViewNode: HTMLDivElement = document.querySelector('#quiz-start-view')!
    // QUIZ VIEW
    quizViewNode: HTMLDivElement = document.querySelector('#quiz-view')!
    backToQuizzesViewNodes: NodeListOf<Element> = document.querySelectorAll('.back-to-quizzes-view')!
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

    addEventListeners = (): void => {
        this.backToQuizzesViewNodes.forEach(element => {
            element.addEventListener('click', () => {
                this.changeVisibleSelectQuizView(true)
                this.changeVisibleStartQuizView(false)
                this.changeVisibleQuizView(false)
                this.endQuiz()
            })
        })
    }
}
