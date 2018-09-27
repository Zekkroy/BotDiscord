const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
  if (message.content == (prefix + "hola")) {
    message.channel.send("Qui ti pasa");
  	}
});
