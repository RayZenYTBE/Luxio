const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You need **MANAGE ROLES** permission to use this command!')
        //next we define some variables
        const target = message.mentions.members.first() 

        if(!target) return message.channel.send('Please specify a target!');
        const role = message.mentions.roles.first() 
        if(!role) return message.channel.send('Please specify a role!');
          if (
            message.member.roles.highest.position <=
            target.roles.highest.position
          )
          return message.reply(
          `You can not add a role to ${target}, because the member have the same role or your role is lower than ${target}`
          );

        await target.roles.add(role)
        let embedz = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setAuthor('Successful Role Adding')
        .addField('Moderator :', `${message.author.tag}`)
        .addField('Targetted :', `${target}`)
        .addField('Role Added :', `${role}`)
        .setTimestamp()
        message.channel.send(embedz);
}
