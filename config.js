const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "💔",
    CAPTION: process.env.CAPTION || "*🧑‍💻⃝𝘿𝙊𝙍𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTHOR: (process.env.PACK_INFO?.split(';') || [])[0] || '🧑‍💻⃝𝘿𝙊𝙍𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥',
    PACKNAME: (process.env.PACK_INFO?.split(';') || [])[1] || '94743454928',
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/i5fwv5.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n*🍁 CREATE BY DORA 🍁*\n\n*watsapp channel link* - https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u",
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
    
