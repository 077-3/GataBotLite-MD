import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup) return
	let usuario = `@${m.sender.split`@`[0]}`
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	let pp = gataMenu.getRandom()
    let apii = await this.getFile(pp)
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `${usuario} 𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙀́𝙇 𝙉𝙊𝙈𝘽𝙍𝙀́ 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘼:\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `${usuario} 𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼𝙎 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		await this.sendMessage(m.chat, { text: `𝘾𝘼𝙈𝘽𝙄𝙊 ${usuario} 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊\n𝘼𝙃𝙊𝙍𝘼 𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊!!\n\n`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `${usuario} 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `🔒 ${usuario} AHORA *${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'}* PUEDE EDITAR LAS INFORMACION DEL GRUPO.`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `🔓 ${usuario} EL GRUPO *${m.messageStubParameters[0] == 'on' ? 'ESTA CERRADO' : 'ESTA ABIERTO'}*\n ${m.messageStubParameters[0] == 'on' ? 'SOLO ADMINS' : 'TODOS'} PUEDEN ENVIAR MENSAJES.`, mentions: [m.sender] }, { quoted: fkontak })
   } else if (m.messageStubType == 28) {
   conn.sendMessage(m.chat, pp, { text: `${usuario} ELIMINO A @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender]}, { quoted: fkontak })  
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `AHORA ES ADMIN EN ESTE GRUPO @${m.messageStubParameters[0].split`@`[0]}\n\n😼🫵ACCIÓN REALIZADA POR: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `DEJA DE SER ADMIN EN ESTE GRUPO @${m.messageStubParameters[0].split`@`[0]}\n\n😼🫵ACCION REALIZADA POR: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
    } else if (m.messageStubType ==  32) {
		await this.sendMessage(m.chat, { text: `Se fue del Grupo @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `${usuario} CAMBIO LAS DURACIÓN DEL LOS MENSAJE TEMPORALES A *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `${usuario} *DESACTIVÓ* LOS MENSAJE TEMPORAL..`, mentions: [m.sender] }, { quoted: fkontak })
	} else {
		console.log({
			messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType], 
		});
	}
}