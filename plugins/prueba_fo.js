let handler = async (m, { conn, text }) => { 
let cometido, text2
cometido = `@${m.sender.split('@')[0]}`

if (text.length >= 1) {
//text = text.slice(0).join(" ")  
} else if (m.quoted && m.quoted.sender) {
text = `@${m.quoted.sender.split('@')[0]}`
} else if (m.quoted && m.quoted.fromMe) {
text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text : `${user.split('@')[0]}`).join(', ')}`
}
  
let coger = `🥵 *Acaban de coger a @${text}* 🥵 

*@${text} ¡te han cogido!* 😏

*${cometido}*
●
█▄
█ ▄█▀█● *@${text}*
*¡Te han cogido!* 😫🍆`.trim()

await conn.reply(m.chat, coger, m, { mentions: [m.sender, text + '@s.whatsapp.net'] })
}

handler.command = /^(coger|follar|prueba34)$/i
export default handler
