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
  return {
    startTime: params.startTime || emptyPomodoro.startTime,
    length: params.length || emptyPomodoro.length,
    elapsed: params.elapsed || emptyPomodoro.elapsed,
  }
}

const persistNewPmodoro = (pomodoro: PomodoroType) => {
  window.database.appendPomodoro(pomodoro)
}

export default buildPomodoro
export {emptyPomodoro, persistNewPmodoro}
