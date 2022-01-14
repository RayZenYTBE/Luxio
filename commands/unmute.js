const {Message, MessageEmbed}= require('discord.js')
const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')


module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need **MANAGE ROLES** permmission to unmute someone!");
  
  const Member = message.mentions.members.first() || message.guild.members/cache.get(args[0])
  

  if(!Member) return message.reply("Please mention a valid member!")

    if (
    message.member.roles.highest.position <=
    Member.roles.highest.position
  )
    return message.reply(
      `You can not unmute ${Member}, because the member have the same role or your role is lower than ${Member}`
    );

  const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

  await Member.roles.remove(role)

      db.add(`points_${message.guild.id}_${message.author.id}`, 1)

  message.channel.send(`${Member.displayName} has been unmuted!`)

  let dm = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setAuthor("Unmute Message")
  .setDescription(`You have been unmuted from ${message.guild.name}`)
  .addField("Moderator :", `${message.author.tag}`)
  .setTimestamp()
  .setFooter("Try not to repeat the same mistake and be a better user!")
  Member.send(dm)
}
