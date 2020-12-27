const { lumiaGet } = require("../../functions");

module.exports = {
  name: "lights",
  category: "lumia",
  description: "Returns all Lumia variables. Only useful for dev work.",
  usage: "<command>",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();
    const data = await lumiaGet(); 
    const tempmessage = JSON.stringify(data, null, 2);
    const msgRows = tempmessage.split('  ');
    var msgBody= "**All available Lumia Commands**\n```JSON\n";
    //var msgBody ="";
    msgRows.forEach(element => {
       msgBody+=element;  
    });
    msgBody+="```\n";
    console.log(msgRows[3]);
    message.channel.send(msgBody);
  }

}
