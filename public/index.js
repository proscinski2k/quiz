import App from './App.js';
import appData from './data/test-data.js';
const app = new App();
app.selectTest.onTestSelected = (selectedTest) => {
    if (selectedTest)
        app.startTest(selectedTest);
};
app.loadTestData(appData);
