import { app, BrowserWindow} from 'electron'
// ipcMain.on('min', e=> mainWindow.minimize());
// ipcMain.on('max', e=> mainWindow.maximize());
// ipcMain.on('close', e=> mainWindow.close());
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 688,
    useContentSize: true,
    width: 1018,
    minWidth: 1018,
    minHeight:688,
    frame:false,
    resizable: true,//可否缩放
    movable: true,//可否移动
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true // 为true是可拖动，为false可拖拽放大  右键设置
    },
    options:{
      titleBarStyle:{
        hidden:false
      }
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
