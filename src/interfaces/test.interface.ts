import { Question } from "../class/Question.js";
import Test from "../class/Test.js";

export interface App {
  state: number;
  currentTest: Test | undefined;
  name: string;
  tests: TestData[];
}

export interface TestData {
  title: string;
  questions: Question[];
}

export interface iQuestion {
  timeSpent: number;
  question: string;
  correctAnswer: number;
  answers: iAnswer[];
}

export interface iAnswer {
  content: string;
  id: number;
}