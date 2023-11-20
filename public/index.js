import CoolQuiz from "./class/CoolQuiz.js";
import testData from "./data/test-data.js";
const quiz = new CoolQuiz();
quiz.loadTestData(testData);
quiz.startTest(0);
