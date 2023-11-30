export default class SelectTest {
    animeTestNode: HTMLDivElement = document.querySelector('#category-anime')!
    mathTestNode: HTMLDivElement = document.querySelector('#category-math')!
    religionTestNode: HTMLDivElement =
        document.querySelector('#category-religion')!
    itTestNoder: HTMLDivElement = document.querySelector('#category-it')!

    selectedTest: number | null = null

    onTestSelected: ((selectedTest: number | null) => void) | undefined

    constructor() {
        this.addListeners()
    }

    notifySelected = () => {
        if (this.onTestSelected) {
            this.onTestSelected(this.selectedTest)
        }
    }

    addListeners = () => {
        this.mathTestNode.addEventListener('click', (e: Event) => {
            this.selectedTest = 1
            this.notifySelected()
        })
        this.itTestNoder.addEventListener('click', (e: Event) => {
            this.selectedTest = 2
            this.notifySelected()
        })
        this.religionTestNode.addEventListener('click', (e: Event) => {
            this.selectedTest = 3
            this.notifySelected()
        })
        this.animeTestNode.addEventListener('click', (e: Event) => {
            this.selectedTest = 4
            this.notifySelected()
        })
    }
}
