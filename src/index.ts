import data from "./data/data";

const titleNode: HTMLHeadElement = document.querySelector("#test-title")!;
const questionNode: HTMLSpanElement = document.querySelector("#question")!;
const answersNode: HTMLDivElement = document.querySelector("#answers")!;
const backNode: HTMLButtonElement = document.querySelector("#back")!;
const nextNode: HTMLButtonElement = document.querySelector("#next")!;
const endNode: HTMLButtonElement = document.querySelector("#end")!;
const questionTimeNode: HTMLSpanElement =
  document.querySelector("question_time")!;
const totalTimeNode: HTMLSpanElement = document.querySelector("total_time")!;

titleNode.innerHTML = data.title;

let currentIntervalId: number;

localStorage.setItem("current-question-idx", "0");
localStorage.setItem("test-data", JSON.stringify(data));

const startCounter = (): void => {
  let time = 0;
  currentIntervalId = setInterval(() => {
    questionNode.innerHTML = `${++time}`;
  }, 1000);
};

const stopCounter = (): void => {
  clearInterval(currentIntervalId);
  questionTimeNode.innerHTML = "0";
};

const displayQuestion = (): void => {
  const currentIdx: number = parseInt(
    localStorage.getItem("current-question-idx")!
  );
  questionNode.innerHTML = data.question[currentIdx].question;
  displayAnswers(currentIdx);
};

const displayAnswers = (currentIdx: number) => {
  const arrQuestionsHTML = data.question[currentIdx].answers.map((element) => {
    `<input type="radio" name="answer" value="${element.content}"/>`;
  });
  const questionsHTML = arrQuestionsHTML.join();
  answersNode.append(questionsHTML);
};
