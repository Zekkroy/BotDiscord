const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content == (prefix + "ping")) {
    message.channel.send("pong!");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
