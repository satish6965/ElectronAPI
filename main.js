const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
// const isDev = require('electron-is-dev');

const isDev = !app.isPackaged;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  mainWindow.loadFile('index.html');

//   mainWindow.loadURL(
//     isDev
//       ? 'http://localhost:3000'
//       : `file://${path.join(__dirname, '../build/index.html')}`
//   );

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
}

// app.on('ready', createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

    require('electron-reload')(__dirname,{
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })



ipcMain.on('notify', (_, message)=>{
    new Notification ({
        title:'Process Complete',
        body: message
    }).show();
})

app.whenReady().then(createWindow);