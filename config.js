const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DORA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU53WEhLWmtUWWtabTY1alJTZE5rMnAwQmhCRUMrZmlZUmNmU2VVajkzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGhRMi9aZkppQ3VidjgxZDFjRk9tVXRZek5vV1dqcFpUNHF3NkJ4LzhEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRmJPdURzdU5IdEN5M2NadEFiOVVqbVNPQXkwOCtQU2FKYk9nbW1sbjFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQaGN5YXg4RmYyQ1ZrUDlVSFBDVFRVMkVySVU0eDhOUkdRL2dXR2hFYVRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJMDhncFBYWDFqS2dEMmdYcHp2NkYyazlxUm8wSUJJT21jQTF2anpwMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN2YWIvRUpIbzlWa0h6aldaN0hoNGJSeTd5RVdZQVZub3NoYXdrUnN5R289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5pelBOUUJWRWhNaTJhWUxDSkNQR294b0lkT0dtdTlZbmpaUkhtclBtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnVHRS83ZG5kWGtrdXFON3FlYjljajFsZDRmNnI4OTlyanViekJjdThnST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJzL082UWVYN040L3V2ZEhVeFMrSDF3WnhjWE10bndqczlRcWxYUys5UDVIZFhSRjYrOGVGYmhNNlNKWDBFSndUY1BuTnJ6VktXZVFKdmNSakZ3NURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6ImlpcnpvbUV4YVk4VklDcUk4TDAwdjBlTGZoY1dFa1JXbk41YWhqT2N5OWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il96NVI0Nkc1U1hDS3psYlNFTWtxQlEiLCJwaG9uZUlkIjoiNDk4ZGM0MGEtODdmMy00NzE3LWJlYzAtZGRkNDY4NDFhMTc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNwUWszSWh2dFFWOHFDN1pJaklnUm9DV09mYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIweWdPZEYyTml6azY0VTlTd25NRzN4TlJDeUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVpLRDdGNEMiLCJtZSI6eyJpZCI6Ijk0NzYzMDA3ODk4OjkzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkThtI/KgOG0gOOFpO+8uuG0h8qAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTEovVVFRdXRlUHdBWVlCeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiSXZFbnFBNG5lU00yczFSZWQ2RWRNTVV3RHFKUDF4eUZuWG1oQ0FOWFJnPSIsImFjY291bnRTaWduYXR1cmUiOiJPNS95NkVob2JNK0o1c3pOdUFaSzdkM2gzdXVmVjRoNnB4VUl2a3pTQWx6NjNJNXFIUjNrV042NnlEaTVyQWN6eTZJWkprZ3VRb2tOanhUbXlHWjVDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiamVqVlN5NUdSVHlGbmV4UlRKQlNJZHRqNmdyL08vUzVmekJmMytEa1YxQ0liQWh3bnhBTUUyVFR6SC9PbGk4UHFCWlowK05hQmZ1aHJUSkQ1MDA2QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzAwNzg5ODo5M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXeUx4SjZnT0oza2pOck5VWG5laEhUREZNQTZpVDljY2haMTVvUWdEVjBZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MDg3NDMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlXOSJ9",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    CAPTION: process.env.CAPTION || "*🧑‍💻⃝𝘿𝙊𝙍𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTHOR: (process.env.PACK_INFO?.split(';') || [])[0] || '🧑‍💻⃝𝘿𝙊𝙍𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥',
    PACKNAME: (process.env.PACK_INFO?.split(';') || [])[1] || '94743454928',
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/i5fwv5.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M DORA-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "🧑‍💻⃝𝘿𝙊𝙍𝘼 𝙈𝘿➝💥",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat
    DEV: process.env.DEV || "94743454928", //replace with your whatsapp number
    AUTOLIKESTATUS: process.env.AUTOLIKESTATUS || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`*𝘼𝙐𝙏𝙊 𝙎𝙏𝘼𝙏𝙐𝙎 𝙎𝙀𝙀𝙉 𝘽𝙔 `𝘿𝙊𝙍𝘼-𝙈𝘿ꪶ 🪄`*`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
    };
    
