/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let contacts = global.owner.filter(c => c[2] === true)
let lista = []

for (let i = 0; i < contacts.length; i++) {
  let contact = contacts[i]
  let number = String(contact[0])
  let name = await conn.getName(number+'@s.whatsapp.net')
  
lista.push([number, name, '💖 Creadora', 'Solo temas de GataBot', 'centergatabot@gmail.com', '🇪🇨 Ecuador', '🎁 https://github.com/GataNina-Li', '🎁 https://github.com/GataNina-Li', '🐱 GataNina-Li'])}
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), '🐈 Bot de WhatsApp', '📵 No hacer Spam por favor', 'gatabot@gmail.com', '🇪🇨 Ecuador', '🎁 ' + md, packname])

await conn.sendContactArray(m.chat, lista, null, { quoted: m })
await m.reply(`Hola @${m.sender.split(`@`)[0]} Contactos disponibles`)
} 
handler.command = ['contacto', 'contact']  
export default handler
