import Test from "../class/Test";

export interface ICoolQuiz {
  state: number;
  currentTest: Test | null;
  name: string;
  tests: Test[];
}

export interface ITest {
  title: string;
  questions: Question[];
}

export interface IQuestion {
  question: string;
  answers: Answer[];
  timeSpent: number;
}

export interface IAnswer {
  content: string;
  id: string;
  correctAnswer: boolean;
}
