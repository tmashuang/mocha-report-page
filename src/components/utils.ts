export const durationToSecs = (ms: number) => {
  return `${(ms / 1000).toFixed(2)}s`
}

const percentage = (initial: number, total: number) => {
  const percentage = (initial / total) * 100
  return `${percentage.toFixed(2)} %`
}

export const filesCount = (tests: any) => {
  const result: any = {}
  for (const test of tests) {

    const segment = test.file.split('/')
    const filename = segment[segment.length - 1];

    if (result[filename]) {
      result[filename]++
    } else {
      result[filename] = 1
    }

  }

  return result
}

export const filesCountPercentages = (tests: any) => {
  const result: any = {}
  const total = tests.length;

  for (const test of tests) {

    const segment = test.file.split('/')
    const filename = segment[segment.length - 1];

    if (result[filename]) {
      result[filename][0]++
    } else {
      result[filename] = [1]
    }
    result[filename][1] = percentage(result[filename][0], total)
  }
  return result
}

export const retryCount = (tests: any) => {
  let retries = 0
  for (const test of tests) {
    retries += test.currentRetry
  }

  return retries
}

export const fileInfoFormat = (state: any) => state.tests.reduce((acc: any, test: any) => {
    const existingElement = acc.find((element: any) => element.name === test.file.split('/').pop());
    if (existingElement) {
      existingElement.count++;
      if (test.duration) {
        existingElement.executionTime += test.duration;
      }
    } else {
      acc.push({
        name: test.file.split('/').pop(),
        count: 1,
        executionTime: test.duration,
        passed: state.passes.filter((pass: { file: any }) => pass.file === test.file).length,
        failed: state.failures.filter((fail: { file: any }) => fail.file === test.file).length,
        retries: test.currentRetry,
      });
    }
    return acc;
  }, []);

export const percentageChrome = (tests: any) => (tests.length / tests.length) * 100
export const percentageFirefox = (tests: any) =>  (0 / tests.length) * 100