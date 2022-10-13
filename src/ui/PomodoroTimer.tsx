import React from 'react'
import generatePomorodo from '../data/pomodoro'
import type {PomodoroType} from '../data/pomodoro'
import {useEffect, useState} from 'react'
import { useAppSelector, useAppDispatch } from '../state/store'
import {start, stop, STARTED_STATE} from '../state/timerSlice'

type TimerDisplay = {
  secondsElapesed: number
}
const TimerDisplay = ({secondsElapesed} : TimerDisplay) => {
  const minutes = (Math.floor(secondsElapesed / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const seconds = (secondsElapesed % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  return <>{minutes}:{seconds}</>
}

const calculateElapsed = (startTime : Date) : number => {
  return Math.ceil((new Date().getTime() - startTime.getTime())/60/60)
}

export type ActivePomodoroType = {
  pomodoro: PomodoroType
}
const ActivePomodoro = ({pomodoro} : ActivePomodoroType) => {
  const {startTime} =  pomodoro
  const [elapsed, setElapsed] = useState(calculateElapsed(startTime))

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(calculateElapsed(startTime));
    }, 1000);

    return () => clearTimeout(timer);
  });


  return <TimerDisplay secondsElapesed={elapsed}/>
}

const InactivePomodoro  = () => <TimerDisplay secondsElapesed={0}/>

const PomorodoTimer = () => {

  const timerState = useAppSelector(state => state.timer.state)
  if(timerState === STARTED_STATE) {
    const pomodoro = generatePomorodo({length: 25})
    return <ActivePomodoro pomodoro={pomodoro}/> 
  }

  return <InactivePomodoro/>
}

export default PomorodoTimer
