import { ICoolQuiz } from "../data/data.js";
import Test from "./Test.js";

export default class CoolQuiz implements ICoolQuiz {
  state: number = 0;
  currentTest: Test | null = null;
  name: string = "Quiz";
  tests: Test[] = [];

  constructor() {}

  loadTestData(data: ICoolQuiz): void {
    this.state = data.state;
    this.currentTest = data.currentTest;
    this.name = data.name;
    this.tests = data.tests;
  }

  startTest(index: number): void {
    this.currentTest = new Test(this.tests[index]);
    this.currentTest.initialize();
  }

  endTest(): void {
    this.currentTest?.finish();
  }
}
