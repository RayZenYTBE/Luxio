const Discord = require('discord.js');
const config = require('../config.json');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;
  
  let prefix = config.prefix;
  
  if(!message.content.startsWith(prefix)) return;

    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)
  
  const m = await message.channel.send("Hold on .....")
  
  let pong = new Discord.MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor('RANDOM')
  .setTimestamp()
  .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

  m.edit(pong)
}

module.exports.help = {
  name: "ping"
}
