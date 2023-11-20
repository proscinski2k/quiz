import { IQuestion } from "../data/data";
import { ITest } from "../data/data";

export default class Test implements ITest {
  titleNode: HTMLHeadElement = document.querySelector(
    "#test-title"
  ) as HTMLHeadElement;
  questionNode: HTMLSpanElement = document.querySelector("#question")!;
  answersNode: HTMLDivElement = document.querySelector("#answers")!;
  backNode: HTMLButtonElement = document.querySelector("#back")!;
  nextNode: HTMLButtonElement = document.querySelector("#next")!;
  endNode: HTMLButtonElement = document.querySelector("#end")!;
  questionTimeNode: HTMLSpanElement = document.querySelector("#question-time")!;
  totalTimeNode: HTMLSpanElement = document.querySelector("#total-time")!;
  title: string = "";
  questions: IQuestion[] = [];

  constructor(testData: ITest) {
    this.questions = testData.questions;
    this.title = testData.title;
  }
}
