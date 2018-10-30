const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("506789438794498048")
setInterval(function() {
channel.send(`salemsalemsalemsalemsalemsalemsalemsalemsalem`);
}, 10)
})

client.login(process.env.BOT_TOKEN);