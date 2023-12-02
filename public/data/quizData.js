import math from './quizzes/mathQuiz.js';
import it from './quizzes/itQuiz.js';
import religion from './quizzes/religionQuiz.js';
import anime from './quizzes/animeQuiz.js';
const app = {
    state: 0,
    currentQuiz: undefined,
    name: 'COOL Quiz',
    quizzes: [math, it, religion, anime]
};
export default app;
