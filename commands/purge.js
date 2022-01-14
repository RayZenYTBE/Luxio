const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need **MANAGE MESSAGES** permissions to use this command')
  if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
  if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
  if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages that I can delete is 99. If you want to delete more than 99, execute the command twice or more!')
  await message.channel.bulkDelete(parseInt(args[0]) + 1)
        .catch(err => console.log(err))

  let success = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setTitle("Purge Command Center")
  .setDescription('Status : :white_check_mark:')
  .addField('Requested by :', `${message.author.tag}`)
  .addField('Message deleted :', + args[0])
  .addField('Executed Location', `${message.guild.name} > **${message.channel.name}**`)
  .setFooter("You can only delete messages that are under 14 days old!")
  message.channel.send(success)
}
