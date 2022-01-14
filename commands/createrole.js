var Discord = require('discord.js')
const ms = require('ms')


module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You need **MANAGE ROLES** permissions to use this command')

  const name = args.join(" ");
  if(!name) return message.reply("Please specify a name for your role!")
                let muterole = await message.guild.roles.create({
                    data : {
                        name : `${name}`,
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNELS: true
                    })
                });
                let success = new Discord.MessageEmbed()
                  .setColor('GOLD')
                  .setAuthor('Role Created')
                  .addField('Creator :', `${message.author.tag}`)
                  .addField('Role :', `${muterole}`)
                  .setTimestamp()
                message.channel.send(success)}
