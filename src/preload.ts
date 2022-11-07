import { contextBridge, ipcRenderer } from "electron"
import type PomodoroType from './data/pomodoro'

declare global {
    interface Window { 
      database : {
        appendPomodoro : Function,
        fetchDefaultPomodoroLength: Function
      },
      defaultVales: {
        handleSetDefaultPomodoroLength: Function
      }
    }
}

contextBridge.exposeInMainWorld(
  "database", {
    appendPomodoro: (pomodoro : typeof PomodoroType) => {
      ipcRenderer.send("SendToDB", pomodoro)
    },
    fetchDefaultPomodoroLength: () => {
      ipcRenderer.send("FetchDefaultPomodoroLength")
    },
  })

contextBridge.exposeInMainWorld(
  "defaultVales", {
    handleSetDefaultPomodoroLength: (callback: any) => {
      ipcRenderer.on('set-default-pomodoro-length', callback)
    }
  }
)


