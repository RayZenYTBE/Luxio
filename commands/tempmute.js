const {Message, Discord, MessageEmbed}= require('discord.js')
const ms = require('ms')


module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You need **MANAGE ROLES** permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
                  if (
            message.member.roles.highest.position <=
            member.roles.highest.position
          )
          return message.reply(
          `You can not tempmute ${member}, because the member have the same role or your role is lower than ${member}`
          );
        const time = args[1]
        if(!Member) return message.channel.send('Member is not found.')
        if(!time) return message.channel.send('Please specify a time.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is now **muted** by ${message.author.tag}!`)

      db.add(`points_${message.guild.id}_${message.author.id}`, 1)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`${Member.displayName} is now **unmuted**`)
        }, ms(time))
      
        let dm = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setAuthor("Unmute Message")
        .setDescription(`You have been unmuted from ${message.guild.name}`)
        .addField("Moderator :", `${message.author.tag}`)
        .setTimestamp()
        .setFooter("Try not to repeat the same mistake and be a better user!")
        Member.send(dm)
}
