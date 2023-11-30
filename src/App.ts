import { TestData, App as iApp } from './interfaces/test.interface.js'
import Test from './class/Test.js'
import SelectTest from './class/SelectTest.js'

export default class App {
    state: number = 0
    currentTest: Test | undefined = undefined
    name: string = 'Quiz'
    tests: TestData[] = []
    selectTest = new SelectTest()

    constructor() {}

    loadTestData(data: iApp): void {
        this.state = data.state
        this.currentTest = data.currentTest
        this.name = data.name
        this.tests = data.tests
    }

    startTest(index: number): void {
        console.log(`Aktualny quiz ${index}`)
        this.currentTest = new Test(this.tests[index - 1])
        this.currentTest.initialize()
    }

    endTest(): void {
        this.currentTest?.finish()
    }
}
