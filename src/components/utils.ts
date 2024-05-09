export const durationToSecs = (ms: number) => {
  return `${ms / 1000}s`
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

export const filesCountDuration = (tests: any) => {
  const result: any = {}

  for (const test of tests) {

    const segment = test.file.split('/')
    const filename = segment[segment.length - 1];

    if (result[filename]) {
      result[filename][0]++
      result[filename][1] += test.duration
    } else {
      result[filename] = [1]
      result[filename][1] = test.duration
    }

  }

  for (const entry in result) {
    result[entry][1] = durationToSecs(result[entry][1])
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

export const mergeArrays = (...arrays: any) => {
  if (arrays.length === 0) return [];

  const maxLength = Math.max(...arrays.map((arr: any) => arr.length));

  const mergedArray = [];
  for (let i = 0; i < maxLength; i++) {
    const nestedArray: any = [];
    arrays.forEach((arr: any) => {
      nestedArray.push(arr[i]);
    });
    mergedArray.push(nestedArray);
  }

  return mergedArray;
}