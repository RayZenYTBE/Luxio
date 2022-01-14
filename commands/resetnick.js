const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You need **MANAGE NICKNAMES** permissions to change your/other people's nickname!");
  
  const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");
      if (
    message.member.roles.highest.position <=
    member.roles.highest.position
  )
    return message.reply(
      `You can not reset ${member}'s nickname, because the member have the same role or your role is lower than ${member}`
    );

    try {
      member.setNickname(null);
      message.channel.send(member.toString() + "'s nickname has been resetted!");
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }
}
