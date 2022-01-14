const Discord = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)
    const embed = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle("Luxio | The No Mercy Moderator")
    .addField("addpoint", 'lxaddpoint <user> <nominal>', true)
    .addField("resetpoint", 'lcresetpoint <user>', true)
    .addField("ping", 'lxping', true)
    .addField("problem", 'lxproblem', true)
    .addField("bugreport", 'lxbugreport <text>', true)
      .setTimestamp()
    .setFooter("<> = required | [] = optional")
    message.channel.send(embed)
}