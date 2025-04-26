const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "list",
    alias: ["listcmd","commands"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭─────❒
┃  𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙼𝙳 📂
╰────────────────❒
╭────────────⪼
┋ ☻ .ᴘʟᴀʏ
┋ ☻ .ꜱᴏɴɢ
┋ ☻ .ᴀᴘᴋ
┋ ☻ .ᴠɪᴅᴇᴏ
┋ ☻ .ꜰʙ
┋ ☻ .ᴛᴋ
┋ ☻ .ɪɢ
┋ ☻ .ɢᴅʀɪᴠᴇ
┋ ☻ .ᴛᴡɪᴛᴛᴇʀ
┋ ☻ .ɪᴍɢ
┋ ☻ .ᴅᴀʀᴀᴍᴀ
┋ ☻ .ᴘʟᴀʏ
┋ ☻ .ᴠɪᴅᴇᴏ
┋ ☻ .ʙᴀɪꜱᴄᴏᴘᴇ
┋ ☻ .ᴍꜰɪʀᴇ
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷
╭─────❒
┃  𝙰𝙽𝙼𝙸𝙴 𝙲𝙼𝙳 🪄
╰────────────────❒

╭───────────────⪼
┋☻ .ʏᴛꜱ
┋☻ .ᴋɪɴɢ 
┋☻ .ᴅᴏɢ
┋☻ .ᴀɴɪᴇ
┋☻ .ᴀɴɪᴍᴇɢɪʀʟ
┋☻ .ʟᴏʟɪ
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

╭─────❒
┃  𝙸𝙽𝙵𝙾 𝙲𝙼𝙳 🧑‍💻
╰────────────────❒

╭─────────────⪼
┋ ☻ .ᴀʟɪᴠᴇ 
┋ ☻ .ᴘɪɴɢ
┋ ☻ .ᴍᴇɴᴜ
┋ ☻ .ᴍᴇɴᴜ2
┋ ☻ .ᴀɪ
┋ ☻ .ꜱʏꜱᴛᴇᴍ
┋ ☻ .ᴏᴡɴᴇʀ
┋ ☻ .ꜱᴛᴀᴛᴜꜱ
┋ ☻ .ᴀʙᴏᴜᴛ
┋ ☻ .ʟɪꜱᴛ
┋ ☻ .ꜱᴄʀɪᴘᴛ
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

╭─────❒
┃  𝙾𝚃𝙷𝙴𝚁 𝙲𝙼𝙳 ⚕
╰────────────────❒

╭─────────────⪼
┋ ☻ .ᴊᴏᴋᴇ 
┋ ☻ .ꜰᴀᴄᴛ 
┋ ☻ .ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ 
┋ ☻ .ɢᴘᴀꜱꜱ 
┋ ☻ .ʜᴀᴄᴋ 
┋ ☻ .ꜱʀᴇᴘᴏ
┋ ☻ .ʙᴇꜰɪɴᴇ
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

╭─────❒
┃  𝙶𝚁𝙾𝚄𝙿 𝙲𝙼𝙳 👥
╰────────────────❒

╭────────────⪼
┋☻ .ᴍᴜᴛᴇ 
┋☻ .ᴜɴᴍᴜᴛᴇ
┋☻ .ʟᴇꜰᴛ
┋☻ .ᴊɪᴅ
┋☻ .ʀᴇᴍᴏᴠᴇ
┋☻ .ᴅᴇʟᴇᴛᴇ
┋☻ .ᴀᴅᴅ 
┋☻ .ᴋɪᴄᴋ
┋☻ .ᴋɪᴄᴋᴀʟʟ
┋☻ .ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
┋☻ .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
┋☻ .ᴘʀᴏᴍᴏᴛᴇ
┋☻ .ᴅᴇᴍᴏᴛᴇ
┋☻ .ᴛᴀɢᴀʟʟ
┋☻ .ɢᴇᴛᴘɪᴄ
┋☻ .ɪɴᴠɪᴛᴇ
┋☻ .ʟɪɴᴋ
┋☻ .ᴊᴏɪɴʀᴇQᴜᴇꜱᴛꜱ
┋☻ .ᴀʟʟʀᴇQ
┋☻ .ʟᴏᴄᴋɢᴄ
┋☻ .ᴜɴʟᴏᴄᴋɢᴄ
┋☻ .ʟᴇᴀᴠᴇ
┋☻ .ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
┋☻ .ᴜᴘᴅᴀᴛᴇɢᴅᴇꜱᴄ
┋☻ .ᴊᴏɪᴍ
┋☻ .ʜɪᴅᴇᴛᴀɢ
┋☻ .ɢɪɴꜰᴏ
┋☻ .ᴅɪꜱᴀᴘᴘᴇᴀʀ ᴏɴ
┋☻ .ᴅɪꜱᴀᴘᴘᴇᴀʀ ᴏꜰɢ
┋☻ .ꜱᴇɴᴅᴅᴍ
┋☻ .ᴅɪꜱᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ
╰━━━━∙⋆⋅⋆∙━ ━━─┉─ •┉─⊷

╭─────❒
┃  𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳 🧑‍💻
╰────────────────❒

╭─────────────⪼
┋☻ .ᴜᴘᴅᴀᴛᴇ 
┋☻ .ʀᴇꜱᴛᴀʀᴛ 
┋☻ .ꜱᴇᴛᴛɪɴɢꜱ
┋☻ .ᴏᴡɴᴇʀ
┋☻ .ʀᴇᴘᴏ 
┋☻ .ꜱʏꜱᴛᴇᴍ 
┋☻ .ʙʟᴏᴄᴋ
┋☻ .ᴜɴʙʟᴏᴄᴋ 
┋☻ .ꜱʜᴜᴛᴅᴏᴡɴ 
┋☻ .ᴄʟᴇᴀʀᴄʜᴀᴛꜱ 
┋☻ .ꜱᴇᴛᴘᴘ 
┋☻ .ʙʀᴏᴀᴅᴄᴀꜱᴛ
┋☻ .ᴊɪᴅ
┋☻ .ɢᴊɪᴅ
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

╭─────❒
┃  𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙼𝙳 ♻
╰────────────────❒

╭───────────⪼
┋☻ .ꜱᴛɪᴄᴋᴇʀ
┋☻ .ᴛᴛꜱ
┋☻ .ᴛʀᴛ
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/x04f5n.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402653537145@newsletter',
                        newsletterName: '𓆩🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥𓆪',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/VID-20250118-WA0022.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
