const {Message, MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)
  let chrysler = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle("Luxio Problems Center")
    .setDescription("Welcome to Luxio problems center. Let's find out why Luxio isn't responding to any commands used/triggered!")
    .addField("1. In an UptimeRobot progress", `Luxio is using UptimeRobot's 24/7 service, and every 1 - 5 hour Luxio will go offline and will be back online to complete the uptime progress. Sometimes when Luxio is about to go off/about to wake up, the commands aren't working 100%`)
    .addField("2. Missing Permissions", `To run some of Luxio's moderation commands, it will require you/Luxio itself to have the exact permissions that is required. Example like ban command required you to have ban permission.`)
    .addField("3. Roles Hierarcy", `To execute some commands like ban, mute, kick, and many other commands required you and Luxio itself to have higher role than your target. If your role/Luxio's role is the same with the target, it won't work either. So roles also matter!`)
    .addField("4. Misscode", `It can't be separated from the developer's error where sometimes problems often occur due to coding errors. To help with this problem, please use the command **lxbugreport <content>**`)
    .addField("5. Admin/Mod", `Maybe, the target you're choosing having an admin perms or mod perms which makes them protected. Please remove the mod/admin perms before trying again!`)
    .setTimestamp()
    .setFooter('Hope this fixed your problems!')
  message.channel.send(chrysler)
}
