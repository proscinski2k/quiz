export default class Quiz {
    constructor() {
        // titleNode: HTMLHeadElement = document.querySelector("#test-title") as HTMLHeadElement
        // questionNode: HTMLSpanElement = document.querySelector("#question")!
        // answersNode: HTMLDivElement = document.querySelector("#answers")!
        // backNode: HTMLButtonElement = document.querySelector("#back")!
        // nextNode: HTMLButtonElement = document.querySelector("#next")!
        // endNode: HTMLButtonElement = document.querySelector("#end")!
        // questionTimeNode: HTMLSpanElement = document.querySelector("#question-time")!
        // totalTimeNode: HTMLSpanElement = document.querySelector("#total-time")!
        this.state = 0;
        this.currentTest = 0;
        this.name = "Quiz";
        this.tests = [];
    }
    loadTestData(data) { }
    startTest(index) { }
    endTest() { }
}
