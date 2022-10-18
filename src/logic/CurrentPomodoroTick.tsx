import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/store'
import {tick} from '../state/currentPomodoroSlice'
import {stop, pause, STARTED_STATE} from '../state/timerSlice'
import {useEffect} from 'react'

const CurrentPomodoroTick = () => {
  const dispatch = useAppDispatch()
  const timerState = useAppSelector(state => state.timer.state)

  useEffect(() => {
    const timer = setInterval(() => {
      if(timerState === STARTED_STATE){
        dispatch(tick())
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <></>
}

export default CurrentPomodoroTick
