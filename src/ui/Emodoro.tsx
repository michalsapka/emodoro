import React from 'react'
import ControlButton from './ControlButtons'
import PomodoroTimer from './PomodoroTimer'
import CurrentPomodoroTick from '../logic/CurrentPomodoroTick'
import CurrentPomodoroPersistor from '../logic/CurrentPomodoroPersistor'
import DefaultValuesFetcher from '../logic/DefaultValuesFetcher'

const Emodoro = (): JSX.Element => {
    return <>
    <CurrentPomodoroTick/>
    <CurrentPomodoroPersistor/>
    <DefaultValuesFetcher/>
    <PomodoroTimer />
    <ControlButton/>
    </>
}

export default Emodoro
