import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
try {
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
//let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

conn.reply(m.chat, `│* Hola ${taguser}\nsi no puede ver los botones del menu es por las nueva actualización del WhatsApp\nYA SE ESTA BUSCADO UNA SOLUCIÓN\nrecomiendo por hora instalar un WhatsApp mods\n\n   
*╰ ㊂ ▸▸ _INFORMACIÓN DEL MENÚ_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'contacto' : 'contact'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cuentasgb' : 'account'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'donar' : 'donate'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'codigo' : 'sc'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instalarbot' : 'installbot'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'estado' : 'status'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'velocidad' : 'ping'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogata' : 'infobot'}_ 
*│* ┊▸ ✦ _${lenguajeGB.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}_ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _BUSCADOR / IA_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *(texto)*' : 'googlef *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *(texto)*' : 'simsimi *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *(texto)*' : 'chatgpt *(text)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _DESCARGAS_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *(nombre o enlace)*' : 'play *(name)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *(enlace)*' : 'yta *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *(enlace)*' : 'ytv *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *(enlace)*' : 'ytadoc *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *(enlace)*' : 'ytvdoc *(link)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _CONVERTIDOR_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *(sticker)*' : 'toimg *(sticker)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *(sticker)*' : 'toimg *(sticker)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ `, m)

let menu = `
˚₊·˚₊· ͟͟͞͞➳❥ ${packname} terms
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│*    
*╰ ㊂ ▸▸ _INFORMACIÓN DEL MENÚ_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'contacto' : 'contact'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cuentasgb' : 'account'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'donar' : 'donate'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'codigo' : 'sc'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instalarbot' : 'installbot'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'estado' : 'status'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'velocidad' : 'ping'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogata' : 'infobot'}_ 
*│* ┊▸ ✦ _${lenguajeGB.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}_ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _BUSCADOR / IA_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *(texto)*' : 'googlef *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *(texto)*' : 'simsimi *(text)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *(texto)*' : 'chatgpt *(text)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _DESCARGAS_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *(nombre o enlace)*' : 'play *(name)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *(enlace)*' : 'yta *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *(enlace)*' : 'ytv *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *(enlace)*' : 'ytadoc *(link)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *(enlace)*' : 'ytvdoc *(link)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _CONVERTIDOR_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *(sticker)*' : 'toimg *(sticker)*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *(sticker)*' : 'toimg *(sticker)*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 

 `, m)
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']


var vid = vi[Math.floor(Math.random() * (vi.length))]

//templateButtons
let templateButtons = [ 
{index: 1, urlButton: {displayText: '❤️ 🅖🅘🅣🅗🅤🅑', url: md}},
{index: 2, urlButton: {displayText: '💚 🅘🅝🅢🅣🅐🅖🅡🅐🅜', url: ig}},
{index: 3, quickReplyButton: {displayText: 'INFOBOT', id: usedPrefix + 'infobot'}}
]

conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: menu.trim(), footer: '✪⇝' + taguser + '\n' + wm, templateButtons }, { quoted: m})
    
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^(menu)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
