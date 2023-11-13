export interface Test {
  title: string;
  question: Question[];
}

interface Question {
  question: string;
  answers: Answer[];
  timeSpent: number;
  correctAnswer: number;
}

interface Answer {
  index: number;
  content: string;
}
