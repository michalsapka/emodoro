import { createSlice } from '@reduxjs/toolkit'
import type { PomodoroType } from '../data/pomodoro'
import buildPomodoro from '../data/pomodoro'

export type CurrentPomodoroType = {
  currentPomodoro: PomodoroType
}

const defaultCurrentPomodoro : CurrentPomodoroType = {
  currentPomodoro: buildPomodoro({})
}


const currentPomodoroSlice = createSlice({
  name: "currentPomodoro",
  initialState: defaultCurrentPomodoro,
  reducers: {
    generateNew: (state) => { state.currentPomodoro = buildPomodoro({}) },
    tick: (state) => { state.currentPomodoro.elapsed += 1 }
  }
})

export default currentPomodoroSlice
export const { generateNew, tick } = currentPomodoroSlice.actions
