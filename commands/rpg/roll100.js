const { RichEmbed} = require("discord.js");
const { stripIndents} = require("common-tags");
const { dieRoll, emo} = require("../../functions.js");



module.exports = {
  name: "roll100",
  category: "rpg",
  description: "Make a percentile dice roll",
  run: async(client, message, args) => {
    const roll1 = dieRoll(10)-1;
    const roll2 = dieRoll(10)-1;
    const roll = ""+roll1+roll2;
    const r="r";
    const o="o";
    const l="l";
    const embed = new RichEmbed()
    .setColor("#ff00ff")
    .setThumbnail(message.author.displayAvatarURL)
    .setDescription(`${message.author} rolled a **${roll}**`)
    .addField(` > ${emo(r)}${emo(o)}${emo(l)}${emo(l)}`,` >   ${emo(roll1)} ${emo(roll2)}`,true);
    message.channel.send(embed);

  }
}
