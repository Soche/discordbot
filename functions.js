const { config } = require("dotenv");

config({
  path:__dirname + "/.env"
});
const lumiatoken = process.env.LUMIATOKEN;
const apiurl =  process.env.APIURL;
const apost = `${apiurl}${lumiatoken}`;

module.exports = {
  getMember: function(message, toFind = ''){
    toFind = toFind.toLocaleLowerCase();

    let target = message.guild.members.get(toFind);

    if (!target && message.mentions.members)
      target = message.mentions.members.first();

      if(!target && toFind) {
        target = message.guild.members.find(member => {
          return member.displayName.toLowerCase().includes(toFind) ||
          member.user.tag.toLowerCase().includes(toFind)
        });
      }

      if (!target)
        target = message.member;

      return target;
  },

  formatDate: function(date) {
    return new Intl.DateTimeFormat('en-US').format(date);
  },

  promptMessage: async function(message, author, time, validReactions) {
    time *= 1000;

    for (const reaction of validReactions) await message.react(reaction);

    const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

    return message
      .awaitReactions(filter, {max: 1, time: time})
      .then(collected => collected.first() && collected.first().emoji.name);
  },

  dieRoll: function(die) {
    return Math.floor(Math.random() * die)+1;
  },
  emo: function(letter) {
    let emos = [];
    emos['0'] ="<:0_:642384497547018252>";
    emos['1'] ="<:1_:642384497538498607>";
    emos['2'] ="<:2_:642384498172100608>";
    emos['3'] ="<:3_:642384497618452505>";
    emos['4'] ="<:4_:642384497551343617>";
    emos['5'] ="<:5_:642384497152622594>";
    emos['6'] ="<:6_:642384497681235968>";
    emos['7'] ="<:7_:642384497677041706>";
    emos['8'] ="<:8_:642384497559732225>";
    emos['9'] ="<:9_:642384497639161887>";
    emos['a'] ="<:a_:642384497383440385>";
    emos['b'] ="<:b_:642384497534304257>";
    emos['c'] = "<:c_:642384497723179018>";
    emos['d'] = "<:d_:642384497467457537>";
    emos['e'] = "<:e_:642384497605869612>";
    emos['f'] = "<:f_:642384497626578944>";
    emos['g'] = "<:g_:642384497509269520>";
    emos['h'] = "<:h_:642384497601544212>";
    emos['i'] = "<:i_:642384497647550494>";
    emos['j'] = "<:j_:642384497332977687>";
    emos['k'] = "<:k_:642384497714659329>";
    emos['l'] = "<:l_:642384497236639748>";
    emos['m'] = "<:m_:642384497882562560>";
    emos['n'] = "<:n_:642384497773510656>";
    emos['o'] = "<:o_:642384497782030347>";
    emos['p'] = "<:p_:642384497744150538>";
    emos['q'] = "<:q_:642384497823842338>";
    emos['r'] = "<:r_:642384497496555521>";
    emos['s'] = "<:s_:642384497802739713>";
    emos['t'] = "<:t_:642384497710465054>";
    emos['u'] = "<:u_:642384497802739732>";
    emos['v'] = "<:v_:642384497547149354>";
    emos['w'] = "<:w_:642384497756864562>";
    emos['x'] = "<:x_:642384497803001856>";
    emos['y'] = "<:y_:642384497782030407>";
    emos['z'] = "<:z_:642384497781899299>";

      return emos[letter];
  },
  lumiaPost: function(ltype, lvalue){
    const axios = require("axios").default;
    axios.post(apost, { type: ltype, value: lvalue })
	.then((res) => {
		console.log('res: ', res.data);
	}).catch((err) => {
		console.log('err: ', err);
	});
  }

}
