let handler = async (m, { conn, usedPrefix, command }) => {
let str = `
🌼 Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!

🌺 Siempre podrás apoyar siguiendo las Cuentas Oficiales y Compartiendo el trabajo logrado de ${packname}`.trim()
  
let templateButtons = [ 
{index: 1, urlButton: {displayText: '💙 ＰＡＹＰＡＬ', url: paypal}},
{index: 2, urlButton: {displayText: '💚 ＩＮＳＴＡＧＲＡＭ', url: ig}},
{index: 3, quickReplyButton: {displayText: lenguajeGB.smsConMenu(), id: `${usedPrefix}menu`}}
]
await conn.sendMessage(m.chat, { image: { url: img21 }, gifPlayback: false, gifAttribution: ~~(Math.random() * 2), caption: '*◜🌹❤️ DONACIÓN VOLUNTARIA ❤️🌹◞*', footer: str, templateButtons }, { quoted: m})

const botones = [ 
{index: 1, urlButton: {displayText: '𝗣𝗔𝗬𝗣𝗔𝗟', url: 'https://www.whatsapp.com/otp/copy/' + paypal}},
{index: 2, urlButton: {displayText: '𝗚𝗜𝗧𝗛𝗨𝗕', url: 'https://www.whatsapp.com/otp/copy/' + md}},
{index: 3, urlButton: {displayText: packname, url: 'https://www.whatsapp.com/otp/copy/' + `https://wa.me/${global.conn.user.jid.split`@`[0]}`}},
]
//await conn.sendPayment(m.chat, '99999999', { text: md, templateButtons: botones, footer: author })
await conn.sendMessage(m.chat, { text: wm, templateButtons: botones, footer: '🍄 *_También puedes compartir lo siguiente como Muestra de Apoyo_*' })
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i 
export default handler
