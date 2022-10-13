import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/store'
import {start, stop, STARTED_STATE} from '../state/timerSlice'


function StoppedButtons(): JSX.Element {
  const dispatch = useAppDispatch()
  return <>
    <button onClick={() => dispatch(start())}>
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
    <button>
      Pause
    </button>
  </>
}

const ControlButton = (): JSX.Element => {
  const timerState = useAppSelector(state => state.timer.state)
  if(timerState === STARTED_STATE) {
    return <StartedButtons/> 
  }

  return <StoppedButtons/>
}

export default ControlButton

