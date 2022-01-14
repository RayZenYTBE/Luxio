const Discord = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)
    let invite = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle("Invite & Support Link!")
    .addField("Invite Link", `[Click here to invite me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
    .addField("Support Server", `[Click to join support Server](https://discord.gg/6XSjbKBbJT)`)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}