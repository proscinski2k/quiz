import { Answer, Question } from "./data/data";

import testData from "./data/test-data.js";

titleNode.innerHTML = testData.name;

let currentIntervalId: number;

localStorage.setItem("current-question-idx", "0");
localStorage.setItem("test-data", JSON.stringify(testData.tests[0]));

const startCounter = (): void => {
  let time: number = 0;
  currentIntervalId = setInterval(() => {
    questionTimeNode.innerHTML = `${++time}`;
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
  console.log(currentIdx);
  const currentQuestion: Question = JSON.parse(
    localStorage.getItem("test-data")!
  ).questions[currentIdx];
  questionNode.innerHTML = currentQuestion.question;
  displayAnswers(currentQuestion.answers);
  startCounter();
};

const displayAnswers = (answers: Answer[]): void => {
  const answersRadio = answers.map((answer) => {
    return `<div>
        <input type="radio" name="answer" id="${answer.id}" value="${answer.content}" />
        <label  for="${answer.id}">${answer.content}</label>
    </div>`;
  });

  answersNode.innerHTML = answersRadio.join("");
};

nextNode.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  stopCounter();
  const currentIdx: number = parseInt(
    localStorage.getItem("current-question-idx")!
  );
  localStorage.setItem("current-question-idx", `${currentIdx + 1}`);
  displayQuestion();
});

backNode.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  stopCounter();
  const currentIdx: number = parseInt(
    localStorage.getItem("current-question-idx")!
  );
  localStorage.setItem("current-question-idx", `${currentIdx - 1}`);
  displayQuestion();
});

displayQuestion();
