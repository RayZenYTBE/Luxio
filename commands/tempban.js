const {Message, Discord, MessageEmbed} = require('discord.js')
const ms = require('ms')


module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You need **BAN MEMBERS** permission to use this command! ')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        const id = Member.id
        const reason = message.content.slice(28).trim();
        if(!Member) return message.channel.send('Member is not found.')
          if (
            message.member.roles.highest.position <=
            Member.roles.highest.position
          )
          return message.reply(
            `You can not temporarily ban ${Member}, because the member have the same role or your role is lower than ${Member}`
          );
        if(!time) return message.channel.send('Please specify a time.')
        Member.ban({ reason })
        message.channel.send(`${Member.displayName} is now temporarily **banned** by ${message.author.tag}!`)

      db.add(`points_${message.guild.id}_${message.author.id}`, 1)

        setTimeout(async () => {
            await message.guild.members.unban(id);
            message.channel.send(`${Member.displayName} is now **unbanned**`)
        }, ms(time))

        Member.send(`You were temporarily banned from ${message.guild.name} for ${time}`)
}
