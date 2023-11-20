import { Answer } from "./Answer.js";
import { IQuestion } from "../data/data.js";

export class Question implements IQuestion {
  question: string = "";
  answers: Answer[] = [];
  timeSpent: number = 0;
}
