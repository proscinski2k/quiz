export default class SelectQuiz {
    constructor(manageViews) {
        this.animeQuizNode = document.querySelector('#category-anime');
        this.mathQuizNode = document.querySelector('#category-math');
        this.religionQuizNode = document.querySelector('#category-religion');
        this.itQuizNode = document.querySelector('#category-it');
        this.quizzesViewNode = document.querySelector('#quizzes-view');
        this.selectedQuiz = 0;
        this.notifySelected = () => {
            if (this.onQuizSelected !== undefined) {
                this.onQuizSelected(this.selectedQuiz);
            }
        };
        this.onSelectQuiz = () => {
            this.notifySelected();
            this.manageViews.changeVisibleSelectQuizView(false);
            this.manageViews.changeVisibleStartQuizView(true);
        };
        this.addListeners = () => {
            this.mathQuizNode.addEventListener('click', (e) => {
                this.selectedQuiz = 1;
                this.onSelectQuiz();
            });
            this.itQuizNode.addEventListener('click', (e) => {
                this.selectedQuiz = 2;
                this.onSelectQuiz();
            });
            this.religionQuizNode.addEventListener('click', (e) => {
                this.selectedQuiz = 3;
                this.onSelectQuiz();
            });
            this.animeQuizNode.addEventListener('click', (e) => {
                this.selectedQuiz = 4;
                this.onSelectQuiz();
            });
        };
        this.addListeners();
        this.manageViews = manageViews;
    }
}
