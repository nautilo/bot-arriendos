const express = require('express')
const server = express()
const moment = require('moment')
const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js')
let now = moment().format()
server.use((req, res) => {
  res.send(now)
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})
