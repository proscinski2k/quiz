export default class SelectTest {
    constructor() {
        this.animeTestNode = document.querySelector('#category-anime');
        this.mathTestNode = document.querySelector('#category-math');
        this.religionTestNode = document.querySelector('#category-religion');
        this.itTestNoder = document.querySelector('#category-it');
        this.selectedTest = null;
        this.notifySelected = () => {
            if (this.onTestSelected) {
                this.onTestSelected(this.selectedTest);
            }
        };
        this.addListeners = () => {
            this.mathTestNode.addEventListener('click', (e) => {
                this.selectedTest = 1;
                this.notifySelected();
            });
            this.itTestNoder.addEventListener('click', (e) => {
                this.selectedTest = 2;
                this.notifySelected();
            });
            this.religionTestNode.addEventListener('click', (e) => {
                this.selectedTest = 3;
                this.notifySelected();
            });
            this.animeTestNode.addEventListener('click', (e) => {
                this.selectedTest = 4;
                this.notifySelected();
            });
        };
        this.addListeners();
    }
}
