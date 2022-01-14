const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You need **ADMINISTRATOR** permission to use this command")
    }
    
    const user = message.mentions.members.first() 
    
    if(!user) {
    return message.channel.send("Please mention the person whose point you want to reset")
    }

      if (
    message.member.roles.highest.position <=
    user.roles.highest.position
  )
    return message.reply(
      `You can not reset ${user}'s point, because the member have the same role or your role is lower than ${user}`
    );
    
    if(message.author.id === user.id) {
      return message.channel.send("You can't reset your own points!")
    }
    
    let warnings = await db.fetch(`points_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any points`)
    }
    
   await db.delete(`normalpoints_${message.guild.id}_${user.id}`);
    user.send(`Your all normal points are reseted by ${message.author.username} from ${message.guild.name}`)

    let resetted = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Normal Points Resetted')
      .addField('Moderator :', `${message.author.tag}`)
      .addField('Punished :', `${message.mentions.users.first().username}`)
      .setTimestamp()
    await message.channel.send(resetted)
    
  
    
}
