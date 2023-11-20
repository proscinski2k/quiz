import { ICoolQuiz } from "../data/data";
import Test from "./Test";

export default class CoolQuiz implements ICoolQuiz {
  state: number = 0;
  currentTest: Test | null = null;
  name: string = "Quiz";
  tests: Test[] = [];

  constructor() {}

  loadTestData(data: ICoolQuiz) {
    this.state = data.state;
    this.currentTest = data.currentTest;
    this.name = data.name;
    this.tests = data.tests;
  }

  startTest(index: number) {
    this.currentTest = new Test(this.tests[index]);
  }

  endTest() {}
}
