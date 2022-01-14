const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You need **MANAGE MESSAGES** permission to use this command")
    }
    
    const user = message.mentions.members.first() 
    
    if(!user) {
    return message.channel.send("Please mention the person whose warning you want to reset")
    }

      if (
    message.member.roles.highest.position <=
    user.roles.highest.position
  )
    return message.reply(
      `You can not reset ${user}'s warning, because the member have the same role or your role is lower than ${user}`
    );
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Yooo, that's cheating! You are not allowed to reset your warnings!")
    }
    
    let warnings = await db.fetch(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
    }
    
      db.add(`points_${message.guild.id}_${message.author.id}`, 1)
    
   await db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)

    let resetted = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Warning Resetted')
      .addField('Moderator :', `${message.author.tag}`)
      .addField('Punished :', `${message.mentions.users.first().username}`)
      .setTimestamp()
    await message.channel.send(resetted)
    
  
    
}
