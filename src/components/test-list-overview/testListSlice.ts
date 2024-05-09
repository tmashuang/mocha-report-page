import { createAppSlice } from "../../app/createAppSlice";
import { tests } from '../../../dist/report.json'
import {
  filesCount,
  filesCountDuration,
  filesCountPercentages
} from '../utils.js'

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
    getAllFiles: state => {
      const files = filesCount(state.tests)
      return Object.keys(files)
    },
    getAllCounts: state => {
      const files = filesCount(state.tests)
      return Object.values(files)
    },
    getAllFilesCount: state => {
      const files = filesCount(state.tests)
      return Object.entries(files)
    },
    getAllFilesCountDuration: state => {
      const files = filesCountDuration(state.tests)
       return Object.entries(files).map(([filename, counts]: any) => [filename, ...counts]);
    },
    getALLFilesCountPercentages: state => {
      const files = filesCountPercentages(state.tests)
      return Object.entries(files).map(([filename, arr]: any) => [filename, ...arr]);

    }
  }
})

export const {
  getAllTests,
  getAllFiles,
  getAllCounts,
  getAllFilesCount,
  getAllFilesCountDuration,
  getALLFilesCountPercentages
} = testListSlice.selectors