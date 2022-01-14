const { Discord, Message, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("MANAGE_CHANNELS"))
  return message.reply("You need **MANAGE CHANNELS** permission to execute this command!");

  const channelTarget = message.mentions.channels.first() || message.channel;

  channelTarget.delete()
    .then(ch => {
      message.author.send('Channel has been deleted!');
    });
}
