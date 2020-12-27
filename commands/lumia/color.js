const { lumiaPost } = require("../../functions");

module.exports = {
  name: "color",
  aliases: ["c"],
  category: "lumia",
  description: "Set color to blue.",
  usage: "<command | alias>",
  run: async (client, message, args) => {
    lumiaPost("chat-color", "blue"); 
  }

}