import { createSlice } from '@reduxjs/toolkit'

export const STARTED_STATE = "started"
export const STOPPED_STATE = "stopped"
export const PAUSED_STATE = "paused"

type TimerState = {
  state: typeof STARTED_STATE | typeof STOPPED_STATE | typeof PAUSED_STATE
}

const defaultTimerState : TimerState = {
  state: STOPPED_STATE
}


const timerSlice = createSlice({
  name: "timer",
  initialState: defaultTimerState,
  reducers: {
    start: state => { state.state = STARTED_STATE },
    stop: state => { state.state = STOPPED_STATE },
    pause: state => { state.state = PAUSED_STATE },
  }
})

export default timerSlice
export const { start, stop, pause } = timerSlice.actions
