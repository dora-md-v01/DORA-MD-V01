const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DORA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01HWWZpdlQvT2dBYVZzQktFcEE3WTlPRWpEUzAyTnRELzRETW9rdmRIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDZuRVVqU0FFVEQwMk1LbVZ0MFRnT09tU3YwZjhKN1UwODBGTGxFUmhuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSldOWEhCd0lhVTZQcXBVbWtyVW82bEFPdUVkMUIxT3EwSlBoN0x3ZDFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxc3FpbEhCbEtNWEo5SmdmYlFqbzlGZVRYRHQvUVZEeEU0bzRDS1dkdG1nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDRlVjN1d6NjNVbzdRVHBZTFA0ZHUrMUtPL3dkc0JrRC9ra3NuZU9FVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRzQ2JIaW15cHY3NUlnR25rRmx1YnU0b1hYM05PWHFMbEc1bzYyWFl5Mkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFNZG1iUTkySjA0TEdNS2JEU3A4TzRNdVNMejJGZVN0YzB0cG96dmpFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2V5M0pZQ2c4NXcxK3d3VHo0R0NwMXRkMXZRdkozT0NXWjczZGxoc3VHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpUd2lZQis1d1QrUzh2L0hHUUFPZFBxYnBudHF3T2dsaXZKUXZGbnBsOW1mdEJrVUE2Z0FZZlhuSkJHMjNtamdCbVBCdTNxdzNyNDRidTU3dEx3eUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiI1SGZuYmxZaG1zZkVPSjR0VEQyUS9iRzNDN2hXUEQramkwelJFM01MMEdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaTHZSTzhaQlE4LTA0by03LThmNmtnIiwicGhvbmVJZCI6IjY3OWM0NDgxLTQyNTUtNDMwYi05ZjcxLTE1OGYxNjA1M2I1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1dU1IZ2hURXc5ckdGWVNjZ1hWbFdid2hkdFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVR5VnFja0tOZlhUMzVxOVhreUprMUZhQ25rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko3NFhDQTVaIiwibWUiOnsiaWQiOiI5NDcxNDAxMjc3ODo0N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTMzNk5VREVJYUFuY0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVGRUTEpsa3h3eXlXdkI2eEo1NFJ6dDJ1QldydGIrOVovVlJqOS91SlBTMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1N4Ylp6Ly9CM2N2b0J2VjUzSGJGaFE1R0l1KytCc0pPei8zRk1UYW9Kd3pDV2hHZ24zOUVvVllZTW9RdzdSUmNBc1I3WUFKTktFN2YxOHVoKzdZQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9tR2doK3JVcEJZZGI2R0xHbS9rSlZOTnNYOEdhdlRyRTQ3d3VuTmRHejVXeGNWb3YxVG02Y3BraXMrQytQM1IvblFYOUhtUGpzbFBFRitBeVliU0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTQwMTI3Nzg6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTNVeXlaWk1jTXNscndlc1NlZUVjN2RyZ1ZxN1cvdldmMVVZL2Y3aVQwdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTMwNTYyMH0=",
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
    
