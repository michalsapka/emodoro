export type PomodoroType = {
  startTime: string,
  length: number,
  elapsed: number
}

export type PomodoroInputType = {
  startTime?: string,
  length?: number
  elapsed?: number
}

const emptyPomodoro : PomodoroType = {
  startTime: String(new Date()),
  length: 60 * 25,
  elapsed: 0, 
}

const buildPomodoro = (params : PomodoroInputType) : PomodoroType => {
  const pom =  {
    startTime: params.startTime || emptyPomodoro.startTime,
    length: params.length || emptyPomodoro.length,
    elapsed: params.elapsed || emptyPomodoro.elapsed,
  }
  persistPmodoro(pom)
  return pom
}

const persistPmodoro = (pomodoro: PomodoroType) => {
  window.database.query()
}



export default buildPomodoro
export {emptyPomodoro, persistPmodoro}
