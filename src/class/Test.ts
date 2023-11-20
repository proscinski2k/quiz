import { ITest } from "../data/data.js";
import { Question } from "./Question.js";

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

  currentIntervalId: number = -1;
  currentQuestionId: number = 0;

  title: string = "";
  questions: Question[] = [];

  constructor(testData: ITest) {
    this.questions = testData.questions;
    this.title = testData.title;
  }

  initialize() {
    this.nextNode.addEventListener("click", (e) => {
      if (this.currentQuestionId >= this.questions.length - 1) return;
      e.preventDefault();
      e.stopPropagation();
      this.stopCounter();
      this.currentQuestionId++;
      this.renderQuestion();
    });

    this.backNode.addEventListener("click", (e) => {
      if (this.currentQuestionId <= 0) return;
      e.preventDefault();
      e.stopPropagation();
      this.stopCounter();
      this.currentQuestionId--;
      this.renderQuestion();
    });

    this.renderQuestion();
    this.titleNode.innerText = this.title;
  }

  finish(): void {}

  renderQuestion(): void {
    console.log(this.currentQuestionId);
    const currentQuestion: Question = this.questions[this.currentQuestionId];
    this.questionNode.innerHTML = currentQuestion.question;
    this.renderAnswers();
    this.startCounter();
  }

  renderAnswers(): void {
    const answersRadio: string[] = this.questions[
      this.currentQuestionId
    ].answers.map((answer) => {
      return `<div>
          <input type="radio" name="answer" id="${answer.id}" value="${answer.content}" />
          <label  for="${answer.id}">${answer.content}</label>
      </div>`;
    });

    this.answersNode.innerHTML = answersRadio.join("");
  }

  nextQuestion(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.stopCounter();
    this.currentQuestionId++;
    this.renderQuestion();
  }

  startCounter(): void {
    let time: number = 0;
    this.currentIntervalId = setInterval(() => {
      this.questionTimeNode.innerHTML = `${++time}`;
    }, 1000);
  }

  stopCounter(): void {
    clearInterval(this.currentIntervalId);
    this.questionTimeNode.innerHTML = "0";
  }
}
