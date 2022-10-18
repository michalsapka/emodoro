import React from 'react'
import {useEffect} from 'react'
import { useAppSelector } from '../state/store'
import { STOPPED_STATE} from '../state/timerSlice'

type TimerDisplay = {
  secondsElapsed: number
}
const TimerDisplay = ({secondsElapsed} : TimerDisplay) => {
  const minutes = (Math.floor(secondsElapsed / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const seconds = (secondsElapsed % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  return <>{minutes}:{seconds}</>
}

const ActivePomodoro = () => {
  const currentPomodoro = useAppSelector(state => state.currentPomodoro)
  useEffect(() => {
    const timer = setInterval(() => { }, 1000);
    return () => clearTimeout(timer);
  });

  return <TimerDisplay secondsElapsed={currentPomodoro.currentPomodoro.elapsed}/>
}

const InactivePomodoro  = () => <TimerDisplay secondsElapsed={0}/>

const PomorodoTimer = () => {
  const timerState = useAppSelector(state => state.timer.state)
  if(timerState !== STOPPED_STATE) {
    return <ActivePomodoro/> 
  }

  return <InactivePomodoro/>
}

export default PomorodoTimer


