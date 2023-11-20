import Test from "./Test";
export default class CoolQuiz {
    constructor() {
        this.state = 0;
        this.currentTest = null;
        this.name = "Quiz";
        this.tests = [];
    }
    loadTestData(data) {
        this.state = data.state;
        this.currentTest = data.currentTest;
        this.name = data.name;
        this.tests = data.tests;
    }
    startTest(index) {
        this.currentTest = new Test(this.tests[index]);
    }
    endTest() { }
}
