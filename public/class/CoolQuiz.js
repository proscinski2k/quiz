import Test from "./Test.js";
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
        this.currentTest.initialize();
    }
    endTest() {
        var _a;
        (_a = this.currentTest) === null || _a === void 0 ? void 0 : _a.finish();
    }
}
