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

client.on("message", (message) => {
if (message.content == (prefix + "ayuda")) {
    message.channel.send({embed: {
      color: 3447003,
      description: "Este bot está en pleno desarrollo. La variedad de comandos es muy escasa actualmente, se irán añadiendo nuevos progresivamente. :robot:."
    }})
}};

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
