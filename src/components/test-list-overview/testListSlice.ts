import { createAppSlice } from "../../app/createAppSlice";
import { tests } from '../../example/report.json'

export interface TestListSliceState {
  tests: any,
}

const initialState: TestListSliceState = {
  tests
}

export const testListSlice = createAppSlice({
  name: "tests",
  initialState,
  reducers: create => ({}),
  selectors: {
    getAllTests: state => state.tests,
    getAllFileNamesNested: state => {
      const nestedFileNames: any = []
      const tests = state.tests

      tests.forEach((test: any) => {
        const parseFile = test.file.match(/[^/]+\.js$/)[0];
        nestedFileNames.push([parseFile])
      });

      return nestedFileNames
    }
  }
})

export const { getAllFileNamesNested } = testListSlice.selectors