import { iQuestion } from "../interfaces/test.interface";
import { Answer } from "./Answer";

export class Question implements iQuestion {
  question:string = "";
  correctAnswer: number = 0;
  answers:Answer[] = [];
  timeSpent:number = 0;
}
