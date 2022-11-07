import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/store'
import {start, stop, pause, STARTED_STATE, PAUSED_STATE} from '../state/timerSlice'
import {set} from '../state/defaultLengthSlice'
import {generateNew} from '../state/currentPomodoroSlice'


function StoppedButtons(): JSX.Element {
  const length = useAppSelector(state => state.defaultLength.seconds)
  const dispatch = useAppDispatch()

  const setDefaultLength = (seconds : number) => {
  }

  return <>
    <select value={length} onChange={(e) => {
      const payload = {seconds: parseInt(e.target.value)}
      dispatch(set(payload))
    }}>
      <option value={20}>20s</option>
      <option value={60*5}>5 minutes</option>
      <option value={60*15}>15 minutes</option>
      <option value={60*25}>25 minutes</option>
      <option value={60*35}>35 minutes</option>
    </select>
    <button onClick={(_) => {
      console.log(length)
      dispatch(start())
      dispatch(generateNew({length}))
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

