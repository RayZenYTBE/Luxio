const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
   const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();
    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)

    message.channel.send(
      new MessageEmbed()
        .setTitle(`First Messsage in ${message.guild.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setColor("RED")
        .setDescription("Content: " + msg.content)
        .addField("Author", msg.author, true)
        .addField('Message ID', msg.id, true)
        .addField('Created At', message.createdAt.toLocaleDateString(), true)
);
}