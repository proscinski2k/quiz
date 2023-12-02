export default class StartQuiz {
    constructor(manageViews, startQuiz) {
        this.quizNameNode = document.querySelector('#quiz-name');
        this.startQuizButtonNode = document.querySelector('#start-quiz');
        this.changeQuizName = (quizName) => {
            this.quizNameNode.innerText = quizName;
        };
        this.addEventListeners = () => {
            this.startQuizButtonNode.addEventListener('click', () => {
                this.manageViews.changeVisibleStartQuizView(false);
                this.manageViews.changeVisibleQuizView(true);
                this.startQuiz();
            });
        };
        this.manageViews = manageViews;
        this.addEventListeners();
        this.startQuiz = startQuiz;
    }
}
