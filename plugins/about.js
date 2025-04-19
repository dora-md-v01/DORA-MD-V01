const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["lucifer","whois"], 
    react: "🖤",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*❍══════•⊰ᴅᴏʀᴀ-ᴍᴅ⊱•════❍*

*•────────────•⟢*
*👋 HELLO ${pushname}*
*•────────────•⟢*

╭─────────𝗠𝗬 𝗔𝗕𝗢𝗨𝗧───៚
┃✬╭────❥
┃✬│
┃✬│  *⛬ ᴡᴇʟᴄᴏᴍᴇ ᴛʜᴇ ᴅᴏʀᴀ-ᴍᴅ ʙᴏᴛ* 
┃✬│  
┃✬│  *⛬ ᴄʀᴇᴀᴛᴇʀ : ᴄʏʙᴇʀ ᴅᴏʀᴀ*  
┃✬│ 
┃✬│  *⛬ ʀᴇᴀʟ ɴᴀᴍᴇ : ʀᴀꜱɪɴᴅᴜ*  
┃✬│ 
┃✬│  *⛬ ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴅᴏʀᴀ-ᴍᴅ*  
┃✬│
┃✬│  *⛬ ᴀɢᴇ : 18 ʏᴇᴀʀ* 
┃✬│ 
┃✬│  *⛬ ᴄɪᴛʏ : ᴋᴜʀᴜɴᴀɢᴀʟᴀ*  
┃✬│ 
┃✬│  *⛬ ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*  
┃✬│
┃✬╰────────❥
╰───────────────────────៚

*┍──━────━──┙◆┕──━────━──┑*
              *𝚂𝙿𝙴𝙲𝙸𝙰𝙻 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁*

╭─────────𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢───៚
┃✬╭────❥
┃✬│
┃✬│  *⛬ ᴅᴇᴠᴇʟᴏᴘᴇʀ : ᴄʏʙᴇʀ ᴅᴏʀᴀ* 
┃✬│  
┃✬│  *⛬ ʙᴜɢ ꜰɪx ᴀɴᴅ ʜᴇʟᴘ : ʀᴇᴀʟ ᴅᴇxᴛᴇʀ*  
┃✬│ 
┃✬│  *⛬ ʙᴜɢ ᴛᴇꜱᴛ ᴀɴᴅ ʜᴇʟᴘ : ᴋɪɴɢ ʀᴀᴠɪ*  
┃✬│ 
┃✬╰────────❥
╰───────────────────────៚


> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴅᴏʀᴀ 🧑‍💻
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/x04f5n.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363402653537145@newsletter',
      newsletterName: '🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
