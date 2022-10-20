import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { PomodoroType } from '../data/pomodoro'
import buildPomodoro from '../data/pomodoro'

export type CurrentPomodoroType = {
  currentPomodoro: PomodoroType
}

const defaultCurrentPomodoro : CurrentPomodoroType = {
  currentPomodoro: buildPomodoro({})
}

export type GenerateNewPomodoroType = {
   length: number
}

const currentPomodoroSlice = createSlice({
  name: "currentPomodoro",
  initialState: defaultCurrentPomodoro,
  reducers: {
    generateNew: (state, action: PayloadAction<GenerateNewPomodoroType>) => { state.currentPomodoro = buildPomodoro(action.payload) },
    tick: (state) => { state.currentPomodoro.elapsed += 1 }
  }
})

export default currentPomodoroSlice
export const { generateNew, tick } = currentPomodoroSlice.actions
