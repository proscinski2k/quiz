import { IAnswer } from "../data/data.js";

export class Answer implements IAnswer {
  id: string = "";
  content: string = "";
  correctAnswer: boolean = false;
}
