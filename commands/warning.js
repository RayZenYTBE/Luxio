const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)

    let nowarns = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor(`Warning Data Request`)
    .addField('Requested by :', `${message.author.tag}`)
    .addField('Target :', `${user}`)
    .addField('Warning(s) :', `${warnings}`)
    .setTimestamp() 

    message.channel.send(nowarns);
}
