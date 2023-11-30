import Test from './class/Test.js';
import SelectTest from './class/SelectTest.js';
export default class App {
    constructor() {
        this.state = 0;
        this.currentTest = undefined;
        this.name = 'Quiz';
        this.tests = [];
        this.selectTest = new SelectTest();
    }
    loadTestData(data) {
        this.state = data.state;
        this.currentTest = data.currentTest;
        this.name = data.name;
        this.tests = data.tests;
    }
    startTest(index) {
        console.log(`Aktualny quiz ${index}`);
        this.currentTest = new Test(this.tests[index - 1]);
        this.currentTest.initialize();
    }
    endTest() {
        var _a;
        (_a = this.currentTest) === null || _a === void 0 ? void 0 : _a.finish();
    }
}
