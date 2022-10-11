export type PomodoroType = {
  startTime: Date,
  length: number
}

export type PomodoroInputType = {
  startTime?: Date,
  length: number
}
const generatePomorodo = (params : PomodoroInputType) : PomodoroType => {
  return {
    startTime: params.startTime || new Date(),
    length: params.length
  }
  
}

export default generatePomorodo
