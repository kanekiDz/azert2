const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("664040050929172531")
setInterval(function() {
channel.send(`𝑫𝒐 𝒏𝒐𝒕 𝒎𝒐𝒗𝒆 𝒑𝒆𝒐𝒑𝒍𝒆 𝒋𝒖𝒔𝒕 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒔𝒂𝒌𝒆 𝒐𝒇 𝒎𝒆𝒔𝒔𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆𝒎`);
}, 30)
})

client.login(process.env.BOT_TOKEN);