const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You need **BAN MEMBERS** permissions to unban user with ID ${id}!`);

  const id = args[0];
  if(!id) return message.reply("Please send an ID!");

  const bannedMembers = await message.guild.fetchBans();
  if(!bannedMembers.find((user) => user.user.id === id))
  return message.reply("User is not banned!");

  message.guild.members.unban(id);
      db.add(`points_${message.guild.id}_${message.author.id}`, 1)
  let banned = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setAuthor('Successful Unban')
  .addField('Moderator :', `${message.author.tag}`)
  .addField('Forgived :', `${id}`)
  .setTimestamp()
  message.channel.send(banned);
}
