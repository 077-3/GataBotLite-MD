let handler  = async (m, { conn, usedPrefix, command, args }) => {
try{
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let type = (args[0] || '').toLowerCase()
let taguser = conn.getName(m.sender)

let sib = '◎ '
const sections = [
{ title: lenguajeGB.smsCreInfo(),
rows: [
{title: sib + 'T E R M U X', rowId: usedPrefix + command + ' termux'},
{title: sib + 'R E P L I T', rowId: usedPrefix + command + ' replit'},
{title: sib + 'H E R O K U', rowId: usedPrefix + ' heroku'},
{title: sib + 'W I N D O W S', rowId: usedPrefix + ' windows'},
]},
{ title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈',
rows: [
{title: sib + 'Instalar 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', rowId: usedPrefix + ' instmd'},
]},
]
 
const listMessage = {
text: '*◎ SELECCIONE EL TIPO DE INSTALACIÓN QUE DESEA SABER:*' + '\n⎔ ' + taguser,
footer: wm,
title: null,
buttonText: lenguajeGB.smsCreSelec(),
sections }


let codigo = `
termux-setup-storage
apt update
pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
git clone https://github.com/GataNina-Li/GataBotLite-MD
cd GataBotLite-MD
npm start`

let codigo2 = `
heroku/nodejs

https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git

https://github.com/clhuang/heroku-buildpack-webp-binaries.git`

let codigo3 `
git clone https://github.com/GataNina-Li/GataBot-MD
cd GataBot-MD
npm install
npm update
node .
`
	
if (/(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i.test(command)) {
switch (type) {
		
case 'termux':
let termux = `*◎ T E R M U X*
_◊ Puedes visitar el repositorio o Copiar los comandos de instalación._`

let buttons = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: 'T E R M U X', url: 'https://f-droid.org/es/packages/com.termux/'}},
{index: 3, urlButton: {displayText: 'C O M A N D O S', url: 'https://www.whatsapp.com/otp/copy/' + codigo}},
{index: 4, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { text: termux, templateButtons: buttons, footer: wm }, { quoted: fkontak})
break
		
case 'replit':
let replit = `*◎ R E P L I T*
_◊ Cree su cuenta en Replit, si ya tiene cuenta use el tercer Botón._`

let buttons = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: 'C R E A R  C U E N T A', url: 'https://replit.com/login'}},
{index: 3, urlButton: {displayText: 'R E P L I T', url: 'https://replit.com/github/GataNina-Li/GataBotLite-MD'}},
{index: 4, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { text: replit, templateButtons: buttons, footer: wm }, { quoted: fkontak})
break
		
case 'heroku':
let heroku = `*◎ H E R O K U*
_◊ Cree su cuenta en Replit, si ya tiene cuenta use el tercer Botón._`

let buttons = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: 'H E R O K U', url: 'https://heroku.com/deploy?template=https://github.com/GataNina-Li/GataBotMDLite-Heroku'}},
{index: 3, urlButton: {displayText: 'C O M A N D O S', url: 'https://www.whatsapp.com/otp/copy/' + codigo2}},
{index: 4, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { text: heroku, templateButtons: buttons, footer: wm }, { quoted: fkontak})
break

case 'windows':	
let heroku = `*◎ W I N D O W S*
*💻 PARA USUARIOS DE WINDOWS/VPS/RDP*

⎔ _Descargar e instala Git_
https://git-scm.com/downloads
⎔ _Descargar e instala NodeJS_
https://nodejs.org/en/download
⎔ _Descargar e instala FFmpeg (No olvide agregar FFmpeg a la variable de entorno PATH)_
https://ffmpeg.org/download.html
⎔ _Descargar e instala ImageMagick_
https://imagemagick.org/script/download.php
⎔ _Descargar e instala Yarn_
https://classic.yarnpkg.com/en/docs/install#windows-stable
⎔ _Descargar e instala FFmpeg_
https://www.gyan.dev/ffmpeg/builds/`

let buttons = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: 'C O M A N D O S', url: 'https://www.whatsapp.com/otp/copy/' + codigo3}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { text: heroku, templateButtons: buttons, footer: wm }, { quoted: fkontak})		
break
		
case 'instmd':
await m.reply('*https://github.com/GataNina-Li/GataBot-MD*')
break
			
default:
return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [taguser] }})
}}
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
