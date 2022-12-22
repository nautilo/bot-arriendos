var arrendatarios = [
    {
      "nombre": "Monica Salazar",       
      "numero": "+56958311294",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Jacinto Tadeo",        
      "numero": "+56992596632",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Monica Salazar (Alex)",
      "numero": "+56958311294",
      "pagosAtrasados": 1
    },
    {
      "nombre": "Ita Castañeda",        
      "numero": "+56941027202",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Isabel Chauca",
      "numero": "+56945390552",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Sergio Antiman",
      "numero": "+56979348166",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Miria Chauca",
      "numero": "+56962766864",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Jarol Ñiquin",
      "numero": "+56952360332",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Nancy Palma",
      "numero": "+56954258574",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Maria Estacio",
      "numero": "+56950423105",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Delicia Morales",
      "numero": "+56972949752",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Pedro Antiman",
      "numero": "+56988016761",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Eliseo Bobadilla",
      "numero": "+56954258574",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Luis Trejo",
      "numero": "+56977816070",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Karen Roman",
      "numero": "+56949382425",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Dany Abad",
      "numero": "+56976311764",
      "pagosAtrasados": 0
    },
    {
      "nombre": "Ernesto",
      "numero": "+56988016761",
      "pagosAtrasados": 0
    }
];

const moment = require('moment');
let now = moment().format();
const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

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

 