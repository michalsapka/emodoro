import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/store'
import {tick} from '../state/currentPomodoroSlice'
import {stop, STARTED_STATE} from '../state/timerSlice'
import {useEffect} from 'react'

const CurrentPomodoroTick = () => {
  const dispatch = useAppDispatch()
  const timerState = useAppSelector(state => state.timer.state)
  const pomodoroLength = useAppSelector(state => state.currentPomodoro.currentPomodoro.length)
  const pomodoroElapsed = useAppSelector(state => state.currentPomodoro.currentPomodoro.elapsed)

  useEffect(() => {
    const timer = setInterval(() => {
      if(timerState === STARTED_STATE){
        dispatch(tick())
      }

      if(pomodoroElapsed >= pomodoroLength) {
        dispatch(stop())
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <></>
}

export default CurrentPomodoroTick
