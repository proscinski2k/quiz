import math from './tests/math-test.js';
import it from './tests/it-test.js';
import religion from './tests/religion-test.js';
import anime from './tests/anime-test.js';
const app = {
    state: 0,
    currentTest: undefined,
    name: 'COOL Quiz',
    tests: [math, it, religion, anime],
};
export default app;
