const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = config.prefix;

/* Comando "!ping", el cual el Bot nos responderá con un "pong!". */

    client.on("message", (message) => {
        if (message.content == (prefix + "ping")) {
        message.channel.send("pong!");
        }
    });


/*  */

    client.on("message", (message) => {
        if (message.content == (prefix + "ayuda")) {
        var embed = new Discord.RichEmbed()
        .setTitle("Título de Embed.")
        .setColor(0xFB00FF)
        .setDescription("Esto es una prueba");
        message.channel.send(embed);
        }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
