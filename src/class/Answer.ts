import { type iAnswer } from '../interfaces/quiz.interface'

export class Answer implements iAnswer {
    id: number = 0
    content: string = ''
}
