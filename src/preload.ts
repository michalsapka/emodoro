import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("database", {
    query: function (query : any) {
        ipcRenderer.send("SendToDB", {
            query
        });
    },
});
