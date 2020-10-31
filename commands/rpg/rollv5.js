const { RichEmbed} = require("discord.js");
const { stripIndents} = require("common-tags");
const { dieRoll, lumiaPost} = require("../../functions.js");

module.exports = {
  name: "rollv5",
  aliases: ["v5"],
  category: "rpg",
  description: "Make a VTM V5 dice roll",
  usage: "<'total dice'> ['hunger dice'] ['difficulty']",
  run: async(client, message, args) => {
    if (!args[0]){
      return message.reply("Please provide atleast one die!")
        .then(m => m.delete(5000));
    }
    const failure = "<:failure:642174241638187049>";
    const success = "<:success:642174241990770708>";
    const crit = "<:crit:642174241986445312>";
    const hungerFail = "<:hungerfail:642174241923399690>";
    const beastialFailure = "<:beastialfailure:642174241973862410>";
    const messyCritical = "<:messycritical:642174241956954112>";
    const hungersuccess = "<:hungersuccess:642174241932050460>";
    let fno =0;
    let sno =0;
    let cno=0;
    let hfno=0;
    let bfno=0;
    let mcno=0;
    let hsno=0;
    let successes=0;
    let resulttext="";
    let dice ="";
    let hungerdice ="";
    let difficulty =args[2];
    let hunger = args[1];
    if (!args[1]){
      hunger = 0;
    }
    let regular = args[0]-hunger;
    let result = [];
    let lumiacode ="";
    for (var i =0; i < regular; i++){
      let j=dieRoll(10);
      dice+=j+" ";
      if (j<6) {
        j=failure;
        fno++;
      } else if (j<10) {
        j=success;
        sno++;
      } else {
        j=crit;
        cno++;
      }
      result.push(j);
    }
    if (args[1]){
      for (var i=0; i< hunger; i++){
        let j=dieRoll(10);
        hungerdice+=j+" ";
        if (j===1) {
          j=beastialFailure;
          bfno++;
        } else if (j<6) {
          j=hungerFail;
          hfno++;
        } else if (j<10) {
          j=hungersuccess;
          hsno++;
        } else {
          j=messyCritical;
          mcno++;
        }
        result.push(j);
      }
    }
    if (!args[2]){
      difficulty = 1;
    }
    successes =sno+hsno;
    if (mcno+cno >1){
      successes +=(Math.floor((mcno+cno)/2)*4);
      if((cno+mcno)%2>0){
        successes++;
      }
    } else{
      (successes +=(mcno+cno));
    }
    if (successes < difficulty && bfno >0){
      resulttext="Beastial Failure!";
      lumiacode ="bf";
    } else if (successes < difficulty){
      resulttext="Failure!";
      lumiacode = "f";
    } else if (mcno===0 && cno >1) {
      resulttext="Critical Success!";
      lumiacode="cs";
    } else if (mcno + cno >1) {
      resulttext="Messy Critical!";
      lumiacode="mc";
    } else {
      resulttext = "Success!";
      lumiacode="s";
    }
    let resultFiltered ="";
    result.forEach(e => {
      resultFiltered += e;
    });
    const embed = new RichEmbed()
    .setColor("#ff00ff")
    .setThumbnail(message.author.displayAvatarURL)
    .setDescription(`${message.author} rolled | Pool ${args[0]} | Hunger ${hunger} | Difficulty ${difficulty}`)
    .addField("**Result**",stripIndents` > Total: ${successes} successes
      > **${resulttext}**`,true)
    .addField("**Regular**",` > ${dice}`, true)
    .addField("**Hunger**",` > ${hungerdice}`,true);
    message.channel.send(resultFiltered);
    message.channel.send(embed);
    lumiaPost("chat-reaction", lumiacode)
  }
}
