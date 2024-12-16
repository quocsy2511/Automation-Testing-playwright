import {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter'
import * as fs from 'fs'

class MyReport implements Reporter {
  onBegin(config: FullConfig, suite: Suite): void {
    console.log(`Executing of ${suite.allTests.length} tests`)
  }

  onEnd(
    result: FullResult,
  ): Promise<{ status?: FullResult['status'] } | undefined | void> | void {
    console.log(`Executing finished with status of ${result.status} results`)
  }

  onTestBegin(test: TestCase, result: TestResult): void {
    console.log(`Execution of ${test.title} started `)
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    const expectTime = result.duration
    const data = {
      test: test.title,
      status: result.status,
      executionTime: expectTime,
      errors: result.errors,
    }

    const dataToString = JSON.stringify(data, null, 2)
    console.log(dataToString)

    // tạo 1 file test result
    fs.writeFileSync('test-results.json', dataToString)
  }
}

export default MyReport
