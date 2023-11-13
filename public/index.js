import data from "./data/data";
const titleNode = document.querySelector("#test-title");
const questionNode = document.querySelector("#question");
const answersNode = document.querySelector("#answers");
const backNode = document.querySelector("#back");
const nextNode = document.querySelector("#next");
const endNode = document.querySelector("#end");
const questionTimeNode = document.querySelector("question_time");
const totalTimeNode = document.querySelector("total_time");
titleNode.innerHTML = data.title;
let currentIntervalId;
localStorage.setItem("current-question-idx", "0");
localStorage.setItem("test-data", JSON.stringify(data));
const startCounter = () => {
    let time = 0;
    currentIntervalId = setInterval(() => {
        questionNode.innerHTML = `${++time}`;
    }, 1000);
};
const stopCounter = () => {
    clearInterval(currentIntervalId);
    questionTimeNode.innerHTML = "0";
};
const displayQuestion = () => {
    const currentIdx = parseInt(localStorage.getItem("current-question-idx"));
    questionNode.innerHTML = data.question[currentIdx].question;
    displayAnswers(currentIdx);
};
const displayAnswers = (currentIdx) => {
    const arrQuestionsHTML = data.question[currentIdx].answers.map((element) => {
        `<input type="radio" name="answer" value="${element.content}"/>`;
    });
    const questionsHTML = arrQuestionsHTML.join();
    answersNode.append(questionsHTML);
};
