const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "LUCIFER-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUQzc2pLdFBaVXJNSlJnTWhVcHczUlhOTkw1MGNWOTRqN1NnS1IrcXBWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTkvTWFFQTE4ak1jV3VralQxS3ZJWDdxMllZU281aktmUmpRbG5IbzhEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRDNuYnF2QUlXcjlIZVN0bm9MWUJrT1JNeW9DQ2xOeWdCSWg5QVRQUzJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqanpRYzh2TlpKak9Gc3VZcUZJYmhKczFabkFXZnJIRXpyMTVqakwzL1RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJbmVFVGxCdXVXYXE3c3RvR01tT1V4Sks0bEZ6VU1nNXg0RVJvalFJSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpMTXJyUHQ3aFRxV0ZIcnVzRFpsU3pHZGw0Y0RZcmRMdURoT05VUmNpeE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RWZTJ2WE9pK0lwWUxNMTVtRlR6dEtZN3FIV2czdWFBbDlXd2oxdXMyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFRvalJTRG1pcGdubjdHNStJU3Q1MUxnZXhyT0NaSXFDUGswRloyblRWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJxVElOalFic1ZoQmpjTkRWL1VDRWRSL29VOUNSY2RxaXRESVRRTEdscnlIK1FZRWlLR2lDK2FrM2gzWVJQcEVtMEdsTmtHODBxb29xMEE5T2NKQWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IkJQSlRyTjc5L2ZjaEhEM04yU1J2VHA1NmN1ZllCV05BRWVNWHJLRGF4Q2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjMwMDc4OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTRFRUE4NUFEQTkzNTYyNzE3NUYyOUZBQ0I3ODFFNzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTA1NjQyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib2NwVXpMdjhRTy1MM3BwTjBMdHY1QSIsInBob25lSWQiOiI2YWViODBlOS0zOGM5LTQ4NGMtYTg5ZC00Yzk1MjE1OTU4NzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV29vUDY0TWdLWnZxYWx5eE5ZT3VBUWpUOHJvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InluUThvQVdjS3RqTXNyS2Z2aEhNMER0MjZVUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJINEsxVERCTCIsIm1lIjp7ImlkIjoiOTQ3NjMwMDc4OTg6OTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiROG0j8qA4bSA44Wk77y64bSHyoAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09MSi9VUVFrK1dOd0FZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJJdkVucUE0bmVTTTJzMVJlZDZFZE1NVXdEcUpQMXh5Rm5YbWhDQU5YUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktQN2xoYzUwNXRLaEp0N3AxYi9WUGFmcHlqblZyZUJFMmFzam5KcGNjRkplcDNrVEo4cklwYWtDbkYveE5YSVZUejk2MktjMTVDTG05L1FWeThKbEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIYjZhWTV3bElkOGNEK29WSkcrak5UbDJ2UElKbUw0N0p6d1ZpeWpoZGlOb0ZHWXdFU1grMmRFbURidENXNDI3V1lFeTlCcEowZzh5b1BIMFhQTWNnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzMDA3ODk4OjkyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld5THhKNmdPSjNrak5yTlVYbmVoSFRERk1BNmlUOWNjaFoxNW9RZ0RWMFkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDUwNTY0MTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVc5In0=",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    CAPTION: process.env.CAPTION || "*🧑‍💻⃝𝘿𝙊𝙍𝘼 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTHOR: (process.env.PACK_INFO?.split(';') || [])[0] || '🧑‍💻⃝𝙇𝙐𝘾𝙄𝙁𝙀𝙍 𝙈𝘿 𝙏𝙀𝘾𝙃➝💥',
    PACKNAME: (process.env.PACK_INFO?.split(';') || [])[1] || '94740482244',
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x04f5n.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M AWAIS-MD WHATSAPP BOT 😊♻️",
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
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`*AUTO STATUS SEEN BOT BY `𝘿𝙊𝙍𝘼-𝙈𝘿ꪶ 🪄`*`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
    };
    
