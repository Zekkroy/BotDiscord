client.on("message", (message) => {
  if (message.content == (prefix + "hola")) {
    message.channel.send("Qui ti pasa");
  	}
});
