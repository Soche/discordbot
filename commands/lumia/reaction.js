const { lumiaPost } = require("../../functions");

module.exports = {
  name: "reaction",
  aliases: ["r"],
  category: "lumia",
  description: "Set reaction to police.",
  usage: "<command | alias>",
  run: async (client, message, args) => {
    lumiaPost("chat-reaction", "police"); 
  }

}