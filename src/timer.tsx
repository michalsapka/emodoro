import React from 'react'
import ControlButton from './control_buttons'
import PomodoroTimer from './pomodoro_timer'
const Timer = (): JSX.Element => {
    return <>
    <PomodoroTimer />
    <ControlButton/>
    </>
}

export default Timer
