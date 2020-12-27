const { lumiaPost } = require("../../functions");

module.exports = {
  name: "animation",
  aliases: ["a"],
  category: "lumia",
  description: "Set animation to test.",
  usage: "<command | alias>",
  run: async (client, message, args) => {
    lumiaPost("chat-animation", "test"); 
  }

}