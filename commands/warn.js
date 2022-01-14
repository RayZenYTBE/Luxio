const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "You need **MANAGE MESSAGES** permission to warn someone"
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
      `You can not warn ${user}, because the member have the same role or your role is lower than ${user}`
    );

    if (message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You can not warn yourself");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "You jerk, how can you warn the server Owner? -_-"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Please mention a reason for your warn!"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
      db.add(`points_${message.guild.id}_${message.author.id}`, 1)
      let successfulwarn1 = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Successful Warn')
      .addField('Moderator :', `${message.author.tag}`)
      .addField('Punished :', `${message.mentions.users.first().username}`)
      .addField('Reason :', `${reason}`)
      .setTimestamp()

      await message.channel.send(successfulwarn1);
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`);

      let successfulwarn1 = new Discord.MessageEmbed()
      .setColor('GOLD')
      .setAuthor('Successful Warn')
      .addField('Moderator :', `${message.author.tag}`)
      .addField('Punished :', `${message.mentions.users.first().username}`)
      .addField('Reason :', `${reason}`)
      .setTimestamp()
      
      await message.channel.send(successfulwarn);
      
      message.delete
}
}
