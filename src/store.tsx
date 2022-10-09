import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const STARTED_STATE = "started"
export const STOPPED_STATE = "stopped"

type TimerState = {
  state: typeof STARTED_STATE | typeof STOPPED_STATE
}

const defaultTimerState : TimerState = {
  state: STOPPED_STATE
}


const timerSlice = createSlice({
  name: "timer",
  initialState: defaultTimerState,
  reducers: {
    start: state => { state.state = STARTED_STATE },
    stop: state => { state.state = STOPPED_STATE }
  }
})

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer
  }
})
export default store

export const { start, stop } = timerSlice.actions

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
