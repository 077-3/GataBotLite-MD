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
{title: sib + 'H E R O K U', rowId: usedPrefix + command + ' heroku'},
{title: sib + 'W I N D O W S', rowId: usedPrefix + command + ' windows'},
]},
{ title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈',
rows: [
{title: sib + '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', rowId: usedPrefix + command + ' instmd'},
]},
]
 
const listMessage = {
text: lenguajeGB.smsInsTexto() + '\n⎔ ' + taguser,
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
heroku/nodejs\n
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git\n
https://github.com/clhuang/heroku-buildpack-webp-binaries.git`

let codigo3 = `
git clone https://github.com/GataNina-Li/GataBotLite-MD
cd GataBotLite-MD
npm install
npm update
node .`
	
if (/(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i.test(command)) {
switch (type) {
		
case 'termux':
let termux = `*◎ T E R M U X*\n${lenguajeGB.smsInsTermux()}`

let buttons1 = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: 'T E R M U X', url: 'https://f-droid.org/es/packages/com.termux/'}},
{index: 3, urlButton: {displayText: lenguajeGB.smsInsComandos(), url: 'https://www.whatsapp.com/otp/copy/' + codigo}},
{index: 4, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}},
]
await conn.sendMessage(m.chat, { text: termux, templateButtons: buttons1, footer: wm }, { quoted: fkontak})
break
		
case 'replit':
let replit = `*◎ R E P L I T*\n${lenguajeGB.smsInsReplit()}`

let buttons2 = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: lenguajeGB.smsInsCrear(), url: 'https://replit.com/login'}},
{index: 3, urlButton: {displayText: 'R E P L I T', url: 'https://replit.com/github/GataNina-Li/GataBotLite-MD'}},
{index: 4, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}},
]
await conn.sendMessage(m.chat, { text: replit, templateButtons: buttons2, footer: wm }, { quoted: fkontak})
break
		
case 'heroku':
let heroku = `*◎ H E R O K U*\n${lenguajeGB.smsInsHeroku()}`

let buttons3 = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 3, urlButton: {displayText: 'H E R O K U', url: 'https://heroku.com/deploy?template=https://github.com/GataNina-Li/GataBotMDLite-Heroku'}},
{index: 4, urlButton: {displayText: 'B U I L D P A C K', url: 'https://www.whatsapp.com/otp/copy/' + codigo2}},
{index: 5, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}},
]
await conn.sendMessage(m.chat, { text: heroku, templateButtons: buttons3, footer: wm }, { quoted: fkontak})
break
		
case 'windows':	
let windows = `*◎ W I N D O W S / V P S / R D P*

⎔ _Git_
https://git-scm.com/downloads
⎔ _NodeJS_
https://nodejs.org/en/download
⎔ _FFmpeg_
https://ffmpeg.org/download.html
⎔ _ImageMagick_
https://imagemagick.org/script/download.php
⎔ _Yarn_
https://classic.yarnpkg.com/en/docs/install#windows-stable`

let buttons4 = [ 
{index: 1, urlButton: {displayText: 'G I T H U B', url: md}},
{index: 2, urlButton: {displayText: lenguajeGB.smsInsComandos(), url: 'https://www.whatsapp.com/otp/copy/' + codigo3}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}},
]
await conn.sendMessage(m.chat, { text: windows, templateButtons: buttons4, footer: wm }, { quoted: fkontak})		
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
console.log(e)}
}
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
