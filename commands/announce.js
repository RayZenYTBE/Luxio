const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(`You need **ADMINISTRATOR** permission to use this command!`)
  }

  message.delete();

  const member = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  const messagesss = message.content.slice(33).trim();

  if(!member) return message.channel.send("Please specify a channel!");
  if(!messagesss) return message.channel.send("Please specify a message to be announce!");

  let success = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setTitle(`Announcement`)
  .setDescription(`${message.guild.name}`)
  .addField(`${messagesss}`, `by ${message.author.username}`)
  .setTimestamp()
  .setFooter("@everyone")

  member.send(success);
}
