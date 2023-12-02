import { type QuizData, type App as iApp } from './interfaces/quiz.interface.js'
import Quiz from './class/Quiz.js'
import SelectQuiz from './class/SelectQuiz.js'
import StartQuiz from './class/StartQuiz.js'
import ManageView from './class/ManageViews.js'

export default class App {
    state: number = 0
    currentQuiz: Quiz | undefined = undefined
    name: string = 'Quiz'
    quizzes: QuizData[] = []
    manageViews: ManageView = new ManageView()
    selectQuiz: SelectQuiz = new SelectQuiz(this.manageViews)
    startQuizWindow: StartQuiz = new StartQuiz(this.manageViews, this.startQuiz.bind(this))

    constructor () {
        this.watchSelectedQuiz()
    }

    watchSelectedQuiz (): void {
        this.selectQuiz.onQuizSelected = (selectedQuiz: number) => {
            if (selectedQuiz > 0) {
                this.setQuiz(selectedQuiz)
                this.displayWindowDoYouWantStartQuiz()
            }
        }
    }

    setQuiz (quizId: number): void {
        this.currentQuiz = new Quiz(this.quizzes[quizId - 1])
    }

    displayWindowDoYouWantStartQuiz (): void {
        this.manageViews.changeVisibleSelectQuizView(true)
        this.startQuizWindow.changeQuizName(String(this.currentQuiz?.title))
    }

    loadQuizData (data: iApp): void {
        this.state = data.state
        this.currentQuiz = data.currentQuiz
        this.name = data.name
        this.quizzes = data.quizzes
    }

    startQuiz (): void {
        this.currentQuiz?.initialize()
    }

    endQuiz = (): void => {
        this.currentQuiz?.finish()
    }
}
