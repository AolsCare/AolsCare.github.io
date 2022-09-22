const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')
let win
function createWindow () {
  win = new BrowserWindow({
    minWidth:320,
    minHeight:480,
    icon:__dirname+"/icons/logo_3.ico",
    frame:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on("app/close",()=>{
  app.quit();
})
ipcMain.on("app/minimize",()=>{
  win.minimize();
})
ipcMain.on("app/maximize", ()=>{
    if(win.isMaximized()){
        win.unmaximize();
}else{
    win.maximize();
}
})