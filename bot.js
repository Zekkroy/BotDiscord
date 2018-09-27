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
        var ayuda = new Discord.RichEmbed()
        .setDescription("Esto es una prueba")
        .setColor(0xdd2596)
        message.author.sendEmbed(ayuda);
        }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
