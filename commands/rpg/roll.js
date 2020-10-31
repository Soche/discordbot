const { RichEmbed} = require("discord.js");
const { stripIndents} = require("common-tags");
const { dieRoll, emo} = require("../../functions.js");


module.exports = {
  name: "roll",
  category: "rpg",
  description: "Make a custom dice roll",
  usage: "<'amount'> <'die type'> ['modifier']",
  run: async(client, message, args) => {
    if (!args[0] || !args[1]){
      return message.reply("Please provide atleast one die!")
        .then(m => m.delete(5000));
    }
    const amount = args[0];
    const die = args[1];
    let modifier = args[2]*1;
    let sum = 0;
    let rolls = [];
    let rollsFiltered ="";
    if (Number.isNaN(modifier)){
      modifier = 0;
    }

    for (var i = 0;i < amount;i++) {
      let j = dieRoll(die);
      sum += j;

      rolls.push(j);
    }
    sum += modifier;
    if (modifier > 0){
        modifier = "+ "+modifier;
    } else if (modifier < 0){
      modifier = Math.abs(modifier);
      modifier = "- "+modifier;
    } else {
      modifier = "";
    }
    rolls.forEach(e => {
      if (e>9){
        e+="";
        for (var k = 0; k < e.length; k++){
          var pos = e.charAt(k);
          rollsFiltered +=emo(pos);
        }
        rollsFiltered += ",  ";
      }else {
        rollsFiltered += emo(e)+",  ";
      }
    });

    const embed = new RichEmbed()
      .setColor("#ff00ff")
      .setThumbnail(message.author.displayAvatarURL)
      .setDescription(`${message.author} rolled **${amount} d${die} ${modifier}** `)
      .addField("Result",`> **${sum}**`,true)
      .addField(` > ${emo('r')}${emo('o')}${emo('l')}${emo('l')}`,` >   ${rollsFiltered}`,true);

    message.channel.send(embed);

  }
}
