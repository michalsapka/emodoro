import React from 'react'
import { useAppSelector } from '../state/store'
import {STOPPED_STATE} from '../state/timerSlice'

const CurrentPomodoroPersistor = () => {
  const timerState = useAppSelector(state => state.timer.state)
  const currentPomodoro = useAppSelector(state => state.currentPomodoro.currentPomodoro)

  if(timerState === STOPPED_STATE && currentPomodoro.elapsed > 0) {
    window.database.appendPomodoro(currentPomodoro)
  }


  return <></>
}

export default CurrentPomodoroPersistor
