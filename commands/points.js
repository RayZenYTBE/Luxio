const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`points_${message.guild.id}_${user.id}`);
    let normal = db.get(`normalpoints_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;
    if (normal === null) normal = 0;

    let nowarns = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor(`Point Data Request`)
    .addField('Requested by :', `${message.author.tag}`)
    .addField('Target :', `${user}`)
    .addField('Mod Point(s) :', `${warnings}`)
    .addField('Normal Point(s) :', `${normal}`)
    .addField('How To Gain Points :', 'Gain **Mod Points** by using **Ban, Unban, Kick, Mute, Unmute, and Resetwarn** commands.\nGain **Normal Points** by using **non-moderation** command!')
    .setTimestamp() 

    message.channel.send(nowarns);
}
