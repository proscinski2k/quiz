export default class Test {
    constructor(testData) {
        this.titleNode = document.querySelector("#test-title");
        this.questionNode = document.querySelector("#question");
        this.answersNode = document.querySelector("#answers");
        this.backNode = document.querySelector("#back");
        this.nextNode = document.querySelector("#next");
        this.endNode = document.querySelector("#end");
        this.questionTimeNode = document.querySelector("#question-time");
        this.totalTimeNode = document.querySelector("#total-time");
        this.title = "";
        this.questions = [];
        this.questions = testData.questions;
        this.title = testData.title;
    }
}
