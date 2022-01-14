const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You need **MANAGE NICKNAMES** permission to change your/other people's nickname!");
  
  const member = message.mentions.members.first();

  if(!member) return message.reply("Please specify a member!");

    if (
    message.member.roles.highest.position <=
    member.roles.highest.position
  )
    return message.reply(
      `You can not set ${member}'s nick, because the member have the same role or your role is lower than ${member}`
    );

  const argument = args.slice(1).join(" ");

  if(!argument) return message.reply("Please specify a nickname!")

  try {
    member.setNickname(argument);
    console.log(err)
  } catch (err) {
    message.reply(
      "Successfuly changed " + member.toString() + "'s nickname!"
    );
  }
}
