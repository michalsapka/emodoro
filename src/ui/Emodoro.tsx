import React from 'react'
import ControlButton from './ControlButtons'
import PomodoroTimer from './PomodoroTimer'
import CurrentPomodoroTick from '../logic/CurrentPomodoroTick'
import CurrentPomodoroPersistor from '../logic/CurrentPomodoroPersistor'

const Emodoro = (): JSX.Element => {
    return <>
    <CurrentPomodoroTick/>
    <CurrentPomodoroPersistor/>
    <PomodoroTimer />
    <ControlButton/>
    </>
}

export default Emodoro
