export interface Quiz{
    name:string,
    tests:Test[]
}

export interface Test {
    title: string,
    questions: Question[]
}

export interface Question {
    question: string,
    answers: Answer[],
    timeSpent: number,
}

export interface Answer {
    content: string,
    id: string,
    correctAnswer: boolean
}