import { type Question } from '../class/Question.js'
import type Quiz from '../class/Quiz.js'

export interface App {
    state: number
    currentQuiz: Quiz | undefined
    name: string
    quizzes: QuizData[]
}

export interface QuizData {
    title: string
    questions: Question[]
}

export interface iQuestion {
    timeSpent: number
    question: string
    correctAnswer: number
    answers: iAnswer[]
}

export interface iAnswer {
    content: string
    id: number
}
