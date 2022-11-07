import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import timerSlice from './timerSlice'
import currentPomodoro from './currentPomodoroSlice'
import defaultLength from './defaultLengthSlice'


const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    currentPomodoro: currentPomodoro.reducer,
    defaultLength: defaultLength.reducer
  }
})
export default store


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
