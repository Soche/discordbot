module.exports = {
  name: "ping",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    const msg = await message.channel.send(`:ping_pong: Pinging...`);

    msg.edit(`:ping_pong: Pong\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency ${Math.round(client.ping)}ms`);

  }

}
