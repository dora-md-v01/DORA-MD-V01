const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DORA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUU4elNHSVp3L1A1N001ekQ3ei9oQVkvL3pKVnZ3dk5xTFdqU3NRWnNuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzVseDdFdnJYM2RGYVBZMytqV2FESVI3bWQ1UW5zcTZXM3dvVS9iSk8wUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTFJySC9hZnhTaHloVkNMNGJoZmdLTlc3a2cxN3RVV0pYTDZrQ0hncDBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS0haVG1EVjgreGpOOTNta1RXVldkK3NLZ2JvU3VHVmlmR05seGRoYVZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGQU5PYkhsamR6WUoyYmZUMkM4Z0xiaVlIakYxNFYyaXdDM0kwcFZJVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxHbGQ3NGE5VWVleFEzWDdERHZnRFZtZjR2SUI3eGZFdGtrY21nL1VJd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJNRkMzVVBJQVhXdkVKdjNpbDVXZmpXVkszeUx2T2s4Q0pQODllc0NIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3hIUVNCcVh1UzJZREZuL3llUkZ4N2ZyUjhTbkk2MW9QV0RXWWY2K3RuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8wRUt4L1BLWTcrdlRndGpwYU9lMU0xd0dKdVBXR25qZmtzemx6Y0lqZkV0Z28wOGcwbUxKMjg0Z0piN0h1WmFpTUY1VzQrNm9rVmRGS0R1bmJIeWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiIrdUdsLzBHSFpDRWNvZVNmNkdFVWJLS1cyRkRHbEFGUUQ4dDQwTklURUlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnUWhUQVVZMFJoU0ZNTUVzUmQ4UGN3IiwicGhvbmVJZCI6IjM0ZDJiZTk3LWE5YjAtNGQwOS1hOTdjLTViNzJkMzE0YzgxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2OXUzVjVkQWlsZlZuRVhNQnRiYXpJRUZXN0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzU0QjFhWllYRy9GMlBvdTlXY3UwN3ZuN1FRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ1MjVQTFRYIiwibWUiOnsiaWQiOiI5NDc2MzAwNzg5ODoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLVFU5UGNGRVBESHRjQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJycE1wd1pzRmxiMEF2ditpVy9CTTUweXVHd3Q1R0YrUmVXaGowdFNOK0FFPSIsImFjY291bnRTaWduYXR1cmUiOiJZQVJmNjQweVhlZWwrTllEdnh5WEsvWGFVZG13WGFSK3hhODlpSzYyVlgyVHQzdGp4L1VEWXduS0lFRmlDOE8yWGluTDh3Z2lFanRLbXcrckxNY3dBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOEZMTFJ2NmtoWEVOU1poSlV6bFRSWjVQRWRnNG9QYVpNc2pqQUNhdWN2MG8xSmJaSjZCV2EyVittRkR4cVJtQ24xaXBvcmFSQlFzME5qTVdMK0thZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzAwNzg5ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE2VEtjR2JCWlc5QUw3L29sdndUT2RNcmhzTGVSaGZrWGxvWTlMVWpmZ0IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU3MDgwMjl9",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "🫀",
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
    
