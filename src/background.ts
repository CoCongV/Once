'use strict';

// @ts-ignore
import ewc from 'node-loader!../ewc/Release/ewc.node';

import { app, protocol, BrowserWindow, session, Session, ipcMain } from 'electron';
import {
  createProtocol,
  installVueDevtools,
} from 'vue-cli-plugin-electron-builder/lib';

const isDevelopment = process.env.NODE_ENV !== 'production';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null;

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true });
function createWindow(width: number, height: number, show: boolean, frame: boolean) {
  // Create the browser window.
  win = new BrowserWindow({ width: width, height: height, show: show, frame: frame, webPreferences: { webSecurity: false }, backgroundColor: '#00000000' });

  ewc.setComposition(win.getNativeWindowHandle(), 4, 0x14800020);

  (<Session>session.defaultSession).webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3071.115 Safari/537.36';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) {
      win.webContents.openDevTools({ mode: 'detach' });
    }
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    win.loadURL('app://./index.html');
  }

  if (!show) {
    win.webContents.on('did-finish-load', () => {
      // @ts-ignore
      win.show();
    });
  }

  win.on('closed', () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow(800, 600, false, false);
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools();
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString());
    }
  }
  createWindow(800, 600, false, false);
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}

ipcMain.on('closs', () => {
  app.quit();
})
ipcMain.on('minimize', () => {
  if (win) {
    win.minimize();
  }
});
ipcMain.on('maxmize', () => {
  if (win && !win.isMaximized()) {
    win.maximize();
  }
})
ipcMain.on('restore', () => {
  if (win && win.isMaximized()) {
    win.restore();
  }
})