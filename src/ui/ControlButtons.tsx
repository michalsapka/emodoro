import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/store'
import {start, stop, pause, STARTED_STATE, PAUSED_STATE} from '../state/timerSlice'
import {generateNew} from '../state/currentPomodoroSlice'


function StoppedButtons(): JSX.Element {
  const dispatch = useAppDispatch()
  return <>
    <button onClick={() => {
      dispatch(start())
      dispatch(generateNew())
    }}>
      Start
    </button>
    </>
}


const StartedButtons = () : JSX.Element => {
  const dispatch = useAppDispatch()
  return <>
    <button onClick={() => dispatch(stop())}>
      Stop
    </button>
    <button onClick={() => dispatch(pause())}>
      Pause
    </button>
  </>
}

const PausedButtons = () : JSX.Element => {
  const dispatch = useAppDispatch()
  return <>
    <button onClick={() => dispatch(stop())}>
      Stop
    </button>
    <button onClick={() => dispatch(start())}>
      Resume
    </button>
  </>
}
const ControlButton = (): JSX.Element => {
  const timerState = useAppSelector(state => state.timer.state)
  if(timerState == STARTED_STATE ) {
    return <StartedButtons/> 
  }

  if(timerState == PAUSED_STATE ) {
    return <PausedButtons/> 
  }

  return <StoppedButtons/>
}

export default ControlButton

