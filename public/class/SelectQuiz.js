export default class SelectQuiz {
    constructor(manageViews) {
        this.animeQuizNode = document.querySelector('#category-anime');
        this.mathQuizNode = document.querySelector('#category-math');
        this.religionQuizNode = document.querySelector('#category-religion');
        this.itQuizNode = document.querySelector('#category-it');
        this.quizzesViewNode = document.querySelector('#quizzes-view');
        this.notifySelected = (quizNumber) => {
            if (this.onQuizSelected !== undefined) {
                this.onQuizSelected(quizNumber);
            }
        };
        this.onSelectQuiz = (quizNumber) => {
            this.notifySelected(quizNumber);
            this.manageViews.changeVisibleSelectQuizView(false);
            this.manageViews.changeVisibleStartQuizView(true);
        };
        this.addListeners = () => {
            this.mathQuizNode.addEventListener('click', () => {
                this.onSelectQuiz(1);
            });
            this.itQuizNode.addEventListener('click', () => {
                this.onSelectQuiz(2);
            });
            this.religionQuizNode.addEventListener('click', () => {
                this.onSelectQuiz(3);
            });
            this.animeQuizNode.addEventListener('click', () => {
                this.onSelectQuiz(4);
            });
        };
        this.addListeners();
        this.manageViews = manageViews;
    }
}
