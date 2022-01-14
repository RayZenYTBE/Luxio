const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(`You need **ADMINISTRATOR** permission to dm someone!`)
  }

  const member = message.mentions.members.first()
  const messagesss = message.content.slice(27).trim();

  if(!member) return message.channel.send("Please specify a member!");
  if(!messagesss) return message.channel.send("Please specify a message to be sent!");

  let sent = new Discord.MessageEmbed()
    .setColor('GOLD')
  .setAuthor('User Has Been DMed')
  .addField('Moderator :', `${message.author.tag}`)
  .addField('Sent to :', `${member}`)
  .addField('Content :', `${messagesss}`)
  .setTimestamp()
  message.channel.send(sent)
  member.send(`Message by **${message.author.tag}** : ${messagesss}`);
}
