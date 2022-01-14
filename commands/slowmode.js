const Discord = require("discord.js")
const MessageEmbed = require("discord.js")

module.exports.run = async (client, message, args) => {
    const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You need **MANAGE CHANNELS** permission to set a slowmode to this channel");
      if (isNaN(amount))
        return message.channel.send("Please specify a number for the slowmode's size!");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " seconds");
        return;
      } else {
        message.channel.send("slowmode is now " + amount + " second");
        return;
      }
    }
    if (args[0] === amount + "min") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " minutes");
        return;
      } else {
        message.channel.send("slowmode is now " + amount + " minute");

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " hours");
        return;
      } else {
        message.channel.send("slowmode is now " + amount + " hour");
        return;
      }
    } else {
      message.channel.send(
        "Please specify a valid time! You can only set seconds(s), minutes(min) and hours(h)"
      );
    }
}
