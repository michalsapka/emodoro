import { contextBridge, ipcRenderer } from "electron"
import type PomodoroType from './data/pomodoro'


declare global {
    interface Window { 
      database : {
        appendPomodoro : Function
      }
    }
}

contextBridge.exposeInMainWorld(
  "database", {
    appendPomodoro: function (pomodoro : typeof PomodoroType) {
      ipcRenderer.send("SendToDB", pomodoro)
    },
  }
)
