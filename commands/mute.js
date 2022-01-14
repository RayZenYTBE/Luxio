const {Message, MessageEmbed}= require('discord.js')
const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')


module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need **MANAGE ROLES** permission to mute someone!")
  const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!Member) return message.channel.send("Please specify a valid member!")
    if (
    message.member.roles.highest.position <=
    Member.roles.highest.position
  )
    return message.reply(
      `You can not mute ${Member}, because the member have the same role or your role is lower than ${Member}`
    );
  const reason = args.slice(1).join(" ")
  const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
  if(!role) {
    try {
      message.channel.send("Muted role is not found. Attempting to create muted role!")

      let muterole = await message.guild.roles.create({
        data : {
          name : 'muted',
          permissions: []
        }
      });
      message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
        await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        })
      });
      message.channel.send("Muted role has sucessfuly been created!")
    } catch (error) {
      console.log(error)
    }
  };
  let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
  if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted!`)
  await Member.roles.add(role2)
  let embedzzz = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setAuthor("Mute Message")
  .addField("Moderator :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
  .setTimestamp()
  .setFooter("Try to DM the moderator for an appeal if this is mistaken!")
  message.channel.send(embedzzz)
      db.add(`points_${message.guild.id}_${message.author.id}`, 1)
  let dm = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setAuthor("Mute Message")
  .setDescription(`You have been muted from ${message.guild.name}`)
  .addField("Moderator :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
  .setTimestamp()
  .setFooter("Try to DM the moderator for an appeal if this is mistaken!")
  Member.send(dm)
}
