export default class ManageView {
    constructor() {
        // HOME PAGE
        this.quizzesSelectViewNode = document.querySelector('#quizzes-view');
        // PICKED QUIZ *VALUE* [BACK TO QUIZZES | START QUIZ]
        this.quizStartViewNode = document.querySelector('#quiz-start-view');
        // QUIZ VIEW
        this.quizViewNode = document.querySelector('#quiz-view');
        this.backToQuizzesViewNodes = document.querySelectorAll('.back-to-quizzes-view');
        this.changeVisibleSelectQuizView = (visible) => {
            const quizzesSelectView = this.quizzesSelectViewNode.classList;
            if (visible)
                quizzesSelectView.remove('hidden');
            else
                quizzesSelectView.add('hidden');
        };
        this.changeVisibleStartQuizView = (visible) => {
            const quizStartView = this.quizStartViewNode.classList;
            if (visible)
                quizStartView.remove('hidden');
            else
                quizStartView.add('hidden');
        };
        this.changeVisibleQuizView = (visible) => {
            const quizView = this.quizViewNode.classList;
            if (visible)
                quizView.remove('hidden');
            else
                quizView.add('hidden');
        };
        this.addEventListeners = () => {
            this.backToQuizzesViewNodes.forEach(element => {
                element.addEventListener('click', () => {
                    this.changeVisibleSelectQuizView(true);
                    this.changeVisibleStartQuizView(false);
                });
            });
        };
        this.addEventListeners();
    }
}
