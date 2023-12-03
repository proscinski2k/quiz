import Quiz from './class/Quiz.js';
import SelectQuiz from './class/SelectQuiz.js';
import StartQuiz from './class/StartQuiz.js';
import ManageView from './class/ManageViews.js';
export default class App {
    constructor() {
        this.state = 0;
        this.currentQuiz = undefined;
        this.name = 'Quiz';
        this.quizzes = [];
        this.manageViews = new ManageView(this.onExitQuiz.bind(this));
        this.selectQuiz = new SelectQuiz(this.manageViews);
        this.startQuizWindow = new StartQuiz(this.manageViews, this.startQuiz.bind(this));
        this.watchSelectedQuiz();
    }
    onExitQuiz() {
        var _a;
        (_a = this.currentQuiz) === null || _a === void 0 ? void 0 : _a.exitQuiz();
    }
    watchSelectedQuiz() {
        this.selectQuiz.onQuizSelected = (selectedQuiz) => {
            if (selectedQuiz > 0) {
                this.setQuiz(selectedQuiz);
                this.displayWindowDoYouWantStartQuiz();
            }
        };
    }
    setQuiz(quizId) {
        this.currentQuiz = new Quiz(this.quizzes[quizId - 1], this.manageViews);
    }
    displayWindowDoYouWantStartQuiz() {
        var _a;
        this.manageViews.changeVisibleSelectQuizView(true);
        this.startQuizWindow.changeQuizName(String((_a = this.currentQuiz) === null || _a === void 0 ? void 0 : _a.title));
    }
    loadQuizData(data) {
        this.state = data.state;
        this.currentQuiz = data.currentQuiz;
        this.name = data.name;
        this.quizzes = data.quizzes;
    }
    startQuiz() {
        var _a;
        (_a = this.currentQuiz) === null || _a === void 0 ? void 0 : _a.initialize();
    }
}
