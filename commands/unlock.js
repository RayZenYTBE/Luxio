const { MessageEmbed, Message } = require("discord.js")
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You need **MANAGE CHANNELS** permissions to unlock a channel!")
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: [],
      },
    ]);
    const embed = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Channel Has Been Unlocked')
      .addField('Moderator :', `${message.author.tag}`)
      .addField('Channel :', `${message.channel.name}`)
      .setTimestamp()
    await message.channel.send(embed);
    message.delete();
}