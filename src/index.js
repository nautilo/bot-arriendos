const express = require('express')
const server = express()
const moment = require('moment')
const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js')
let now = moment().format("DD/MM/YYYY")
/**
 * Instancia del bot de Whatsapp
 */
const client = new Client({
  authStrategy: new LocalAuth()
});


client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');

});

client.on('message', message => {
if(message.body === 'quediaes') {
  message.reply(now);
}
});

client.initialize();

/**
 * Render en html
 */
server.use((req, res) => {
  res.send(now)
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})
