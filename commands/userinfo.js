const ytsr = require("ytsr");
const Discord = require("discord.js");
const MessageEmbed = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    //Start
    let member = message.mentions.members.first() || message.member;

    const statuses = {
      online: "Online",
      dnd: "Do Not Disturb",
      idle: "Idle",
      offline: "Offline/Invisible"
    };

    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)

    const embed = new Discord.MessageEmbed()
      .setTitle(member.user.username + " Information!")
      .setColor("GOLD")
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Full Name", member.user.tag, true)
      .addField("ID", `${member.id}`, true)
      .addField("Status", statuses[member.presence.status], true)
      .addField(
        `Roles Count`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "No Roles!",
        true
      )
      .addField(`Avatar Url`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("Joined Server At", member.joinedAt.toDateString())
      .addField("Joined Discord At", member.user.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
};

module.exports.help = {
    name: "search"
}