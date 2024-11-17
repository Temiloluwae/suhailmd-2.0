const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="olokedetemiloluwa@gmail.com"
global.location="Lahore."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349070018773";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_50_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRXNGZWlhU29MajBmY2ZUSlVEeFE5Q0dneXV3UGw1d0RSUkJaZUlIbEJCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1ZhcXZDcU1Tblc2RFRIOVNTODFtQVwiLFxuICBcInBob25lSWRcIjogXCJlZWRhYWU4MC0xMjgzLTQwOTktOWIxZi1lMjhlNzdlNWJiMDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTA2LFxuICAgICAgMTIwLFxuICAgICAgNTMsXG4gICAgICAxNTgsXG4gICAgICAxNzQsXG4gICAgICAxNCxcbiAgICAgIDE1NixcbiAgICAgIDI1MixcbiAgICAgIDU4LFxuICAgICAgMzMsXG4gICAgICAxNzEsXG4gICAgICAyNDgsXG4gICAgICAxMjAsXG4gICAgICAxNzYsXG4gICAgICAyMDEsXG4gICAgICA3MCxcbiAgICAgIDcxLFxuICAgICAgMTM3LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDQsXG4gICAgICAxNjgsXG4gICAgICAyNCxcbiAgICAgIDE1MCxcbiAgICAgIDgzLFxuICAgICAgMTk0LFxuICAgICAgNCxcbiAgICAgIDY5LFxuICAgICAgMjUyLFxuICAgICAgMjQ0LFxuICAgICAgMTcyLFxuICAgICAgMTA2LFxuICAgICAgMjI1LFxuICAgICAgMTk5LFxuICAgICAgNDAsXG4gICAgICAxMzcsXG4gICAgICA4OSxcbiAgICAgIDI0OCxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNWQktHOEU4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcwMDE4NzczOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRW1tYW51ZWxcIixcbiAgICBcImxpZFwiOiBcIjQxMzc4MTY3OTI2OTQyOjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMQm9NY0dFUEdVNTdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY0VWc0wxTC9LR1lMWEJwS3BmczJDc3M1ZkhoVkVqRVZIMDNRVUhMeFdBVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwdmhUZUFMcFJKMTJUU1pVT1VEcE8rdllGQjhhYmNtUFlpaTJxZW5Va0YvYm5KQ3FyQVU5MDVSSmF6K0t2alZRNmQ1UWIxY3VoQXFaeEhDMnhFcExBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFUmNPdlJITStCZjlWVUZnTmhrcVd2cW9xZU8zRmdhR2FsWjVZOXhnWEh1K1EzL2w4QU50V2tjSjRUbi82VUJWSzVYcDRNdVRONUdBWmtSaUtVbndBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcwMDE4NzczOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODQwNjMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Emmanuel",
  ownername:process.env.OWNER_NAME|| "Emmanuel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
