const Discord = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You need **KICK MEMBERS** permission to use this command!");

  const member = message.mentions.members.first();
  if(!member) return message.reply("Please mention a member to kick!")

  if (
    message.member.roles.highest.position <=
    member.roles.highest.position
  )
    return message.reply(
      "You can't punish that member, because the member have the same role or your role is lower than that member!"
    );

  const reason = args.slice(1).join(" ") || "No Reason Provided";

  member.kick({ reason });
      db.add(`points_${message.guild.id}_${message.author.id}`, 1)
  let banned = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setAuthor('Successful Kick')
  .addField('Moderator :', `${message.author.tag}`)
  .addField('Punished :', `${member}`)
  .addField('Reason :', `${reason}`)
  .setTimestamp()
  .setFooter('Please do recheck if the member was banned succesfuly. Just to make sure!')
  message.channel.send(banned);

  let dm = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setAuthor("Kick Message")
  .setDescription(`You have been kicked from ${message.guild.name}`)
  .addField("Moderator :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
  .setTimestamp()
  .setFooter("Try to DM the moderator for an appeal")
  member.send(dm)
}
