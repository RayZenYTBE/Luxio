const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const fetchBans = message.guild.fetchBans();
  const bannedMembers = (await fetchBans)
    .map((member) => member.user.tag)
    .join(", ");

  let embed = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setTitle(`${message.guild.name}'s banned members'`)
  .addField('Banned Member(s) :', `${bannedMembers}`)
  .setFooter(`Requested by ${message.author.tag}`)
  message.channel.send(embed);
}
