import { contextBridge, ipcRenderer } from "electron"
import type PomodoroType from './data/pomodoro'

contextBridge.exposeInMainWorld("database", {
    appendPomodoro: function (pomodoro : typeof PomodoroType) {
      ipcRenderer.send("SendToDB", pomodoro)
    },
});
