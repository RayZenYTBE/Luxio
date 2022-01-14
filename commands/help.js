const Discord = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)
    const embed = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setThumbnail("https://cdn.discordapp.com/attachments/905974080975544462/928517626613882931/discord-avatar-128-EZ57O.gif")
    .setTitle("Luxio | The No Mercy Moderator")
    .addField("help", 'Show this panel')
    .addField("helpmod", 'Show moderation command panel')
    .addField("helpinfo", `Show info commands list`)
    .addField("quickhelp", 'Send all commands list once at a time')
    .addField("problem", 'Show possible answers for your problem when using Luxio')
    .addField("bugreport", '**Report a bug to developer**')
      .setTimestamp()
    message.channel.send(embed)
}