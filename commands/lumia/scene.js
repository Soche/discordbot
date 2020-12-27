const { lumiaPost } = require("../../functions");

module.exports = {
  name: "scene",
  aliases: ["sc"],
  category: "lumia",
  description: "Set a scene.",
  usage: "<command | alias> <'scene name'>",
  run: async (client, message, args) => {
    if (!args[0]){
        return message.reply("Please provide the scene you want to switch to!")
          .then(m => m.delete(5000));
      }
    message.channel.send(`Setting scene to ${args[0]}`);
    lumiaPost("chat-scene", args[0]); 
  }

}