const { Discord, Message, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("MANAGE_CHANNELS"))
  return message.reply("You need **MANAGE CHANNELS** permission to execute this command!");

  const channelNameQuery = args.join(" ");
  if(!channelNameQuery)
  return message.reply("Please specify a channel name! Must contain at least 1 character. Only text, number, and emojis were allowed!");

  message.guild.channels.create(channelNameQuery).then((ch) => {
    message.channel.send(`Click ${ch} to access the newly created channel!`)
  });
}
