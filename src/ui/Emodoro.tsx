import React from 'react'
import ControlButton from './ControlButtons'
import PomodoroTimer from './PomodoroTimer'

const Emodoro = (): JSX.Element => {
    return <>
    <PomodoroTimer />
    <ControlButton/>
    </>
}

export default Emodoro
