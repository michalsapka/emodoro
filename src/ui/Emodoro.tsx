import React from 'react'
import ControlButton from './ControlButtons'
import PomodoroTimer from './PomodoroTimer'
import CurrentPomodoroTick from '../logic/CurrentPomodoroTick'

const Emodoro = (): JSX.Element => {
    return <>
    <CurrentPomodoroTick/>
    <PomodoroTimer />
    <ControlButton/>
    </>
}

export default Emodoro
