const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  const member = message.mentions.members.first();

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You need **BAN MEMBERS** permission to use this command!`);

  if(!member) return message.reply("Please mention a member to ban!")

  if (
    message.member.roles.highest.position <=
    member.roles.highest.position
  )
    return message.reply(
      `You can not ban ${member}, because the member have the same role or your role is lower than ${member}`
    );

  const reason = args.slice(1).join(" ") || "No Reason Provided";

  member.ban({ reason });
      db.add(`points_${message.guild.id}_${message.author.id}`, 1)
  let banned = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setAuthor('Successful Ban')
  .addField('Moderator :', `${message.author.tag}`)
  .addField('Punished :', `${member}`)
  .addField('Reason :', `${reason}`)
  .setTimestamp()
  message.channel.send(banned);
  let dm = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setAuthor("Ban Message")
  .setDescription(`You have been banned from ${message.guild.name}`)
  .addField("Moderator :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
  .setTimestamp()
  .setFooter("Try to DM the moderator for an appeal if this is mistaken!")
  member.send(dm)
}
