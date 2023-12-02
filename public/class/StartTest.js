export default class StartTest {
    constructor(startTest) {
        this.startTestNode = document.querySelector('#test-start');
        this.testNameNode = document.querySelector('#test-name');
        this.startTestButtonNode = document.querySelector('#start-test');
        this.changeVisible = (visible) => {
            const startWindow = this.startTestNode.classList;
            if (visible)
                startWindow.remove('hidden');
            else
                startWindow.add('hidden');
        };
        this.changeTestName = (testName) => {
            this.testNameNode.innerText = testName;
        };
        this.addEventListeners = () => {
            this.startTestButtonNode.addEventListener('click', () => {
                this.startTest();
            });
        };
        this.addEventListeners();
        this.startTest = startTest;
    }
}
