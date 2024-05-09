import { createAppSlice } from "../../app/createAppSlice"
import { stats } from '../../../dist/report.json'

export interface TestInfoSliceState {
  stats: {
    suites: number;
    tests: number;
    passes: number;
    pending: number;
    failures: number;
    start: string;
    end: string;
    duration: number;
    passPercentage: number;
    failingPercentage: number;
  }
}

const initialState: TestInfoSliceState = {
  stats
}

export const testInfoSlice = createAppSlice({
  name: "info",
  initialState,
  reducers: create => ({

  }),
  selectors: {
    getTestStarted: state => new Date(state.stats.start).toUTCString(),
    getTestEnded: state => new Date(state.stats.end).toUTCString(),
    getTestDuration: state => {
      const msDuration = state.stats.duration

      const durationInSecs = msDuration / 1000
      return durationInSecs
    }
  }
})

export const { getTestStarted, getTestEnded, getTestDuration } = testInfoSlice.selectors