module.exports = {
  name: "clear",
  aliases: ["purge", "nuke"],
  category: "moderation",
  description: "Clears the chat",
  run: async (clienet, message, args) => {
    if (message.deleteable){
      message.delete();
    }
    // Member doesn't have permissions.
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.reply("You can't delete messages...").then(m => m.delete(5000));
    }

    //check if args[0] is a number
    if (isNaN(args[0]) || parseInt(args[0] <=0)){
      return message.reply("Sorry... I can't delete messages.").then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100){
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
      .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
      .catch(err => message.reply(`Something went wrong... ${err}`));
  }

}
