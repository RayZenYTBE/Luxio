const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You need **ADMINISTRATOR** permission to add a point"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please specify a target!"
      );
    }

    if (
    message.member.roles.highest.position <=
    user.roles.highest.position
  )
    return message.reply(
      `You can not add points to ${user}, because the member have the same role or your role is lower than ${user}`
    );

    if (message.author.id === user.id) {
      return message.channel.send("You can not add points to yourself! That's cheating!");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "You jerk, how can you add some points to the server Owner? -_-"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Please mention a nominal for the point!"
      );
    }
              if (isNaN(reason))
        return message.channel.send("Please specify a number for the point's size!");


    let points = db.get(`points_${message.guild.id}_${user.id}`);

    if (points === null) {
      db.add(`normalpoints_${message.guild.id}_${user.id}`, reason);
      
      user.send(`You have been given ${reason} normal points in **${message.guild.name}** by ${message.author.username}`);
      let successfulwarn1 = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Normal Point Added')
      .addField('Admin :', `${message.author.tag}`)
      .addField('Given to :', `${message.mentions.users.first().username}`)
      .addField('Points Added :', `${reason}`)
      .setTimestamp()

      await message.channel.send(successfulwarn1);
    } else if(points !== null) {
      
      db.add(`normalpoints_${message.guild.id}_${user.id}`, reason);
      
      user.send(`You have been given ${reason} normal points in **${message.guild.name}** by ${message.author.username}`);

      let successfulwarn1 = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Normal Point Added')
      .addField('Admin :', `${message.author.tag}`)
      .addField('Given to :', `${message.mentions.users.first().username}`)
      .addField('Points Added :', `${nominal}`)
      .setTimestamp()
      
      await message.channel.send(successfulwarn);
      
      message.delete
}
}
