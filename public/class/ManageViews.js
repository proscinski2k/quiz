export default class ManageView {
    constructor(onExitQuiz) {
        this.onExitQuiz = onExitQuiz;
        // HOME PAGE
        this.quizzesSelectViewNode = document.querySelector('#quizzes-view');
        // PICKED QUIZ *VALUE* [BACK TO QUIZZES | START QUIZ]
        this.quizStartViewNode = document.querySelector('#quiz-start-view');
        // QUIZ VIEW
        this.quizViewNode = document.querySelector('#quiz-view');
        // AUTHORS VIEW
        this.authorsViewNode = document.querySelector('#authors-view');
        // SUMMARY VIEW
        this.summaryViewNode = document.querySelector('#quiz-result-summary-view');
        this.backToQuizzesViewNodes = document.querySelectorAll('.back-to-quizzes-view');
        this.btnGoToAuthorsViewNode = document.querySelector('#button-go-to-authors-view');
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
            else {
                this.onExitQuiz();
                quizView.add('hidden');
            }
        };
        this.changeVisibleSummaryView = (visible) => {
            const summaryView = this.summaryViewNode.classList;
            if (visible)
                summaryView.remove('hidden');
            else
                summaryView.add('hidden');
        };
        this.changeVisibleAuthorsView = (visible) => {
            const authorsView = this.authorsViewNode.classList;
            if (visible)
                authorsView.remove('hidden');
            else
                authorsView.add('hidden');
        };
        this.hideAllViews = () => {
            this.changeVisibleAuthorsView(false);
            this.changeVisibleStartQuizView(false);
            this.changeVisibleQuizView(false);
            this.changeVisibleSelectQuizView(false);
            this.changeVisibleSummaryView(false);
        };
        this.addEventListeners = () => {
            this.backToQuizzesViewNodes.forEach((element) => {
                element.addEventListener('click', () => {
                    this.hideAllViews();
                    this.changeVisibleSelectQuizView(true);
                });
            });
            this.btnGoToAuthorsViewNode.addEventListener('click', () => {
                this.hideAllViews();
                this.changeVisibleAuthorsView(true);
            });
        };
        this.addEventListeners();
    }
}
