const {app, BrowserWindow, Menu, Tray, globalShortcut } = require('electron')
const path = require('path')


app.on('ready', _ => {
  console.log("in ready state")
  globalShortcut.register('CommandOrControl+Q', _ => { app.quit() })
  const tray = new Tray(path.join('src', 'space_ghost.png'))
  const menu = Menu.buildFromTemplate([
      {
        label: 'Wow',
        click: _ => console.log('Wow Clicked')
      }, {
        label: 'Awesome',
        click: _ => console.log('Awsome Clicked')
      }
  ])

  tray.setContextMenu(menu)
  tray.setToolTip('This app rocks')
  new BrowserWindow()
})
