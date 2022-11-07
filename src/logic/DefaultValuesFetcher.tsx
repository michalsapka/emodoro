import React from 'react'
import {set} from '../state/defaultLengthSlice'
import { useAppDispatch } from '../state/store'

const DefaultValuesFetcher = () => {
  const dispatch = useAppDispatch()
  window.defaultVales.handleSetDefaultPomodoroLength((_ : any, seconds : number) => {
    const payload = {seconds: seconds}
    dispatch(set(payload))
  })

  window.database.fetchDefaultPomodoroLength()

  return <></>
}

export default DefaultValuesFetcher

