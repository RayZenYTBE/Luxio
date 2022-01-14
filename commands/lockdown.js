const { Discord, MessageEmbed, Message } = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("You need **ADMINISTRATOR** permission to use this command!");

  const role = message.guild.roles.everyone;

  if(!args.length) return message.reply("Please specify a query. Is it true or false!");

  const query = args[0].toLowerCase();

  if(!["true", 'false'].includes(query))
    return message.reply("The option you have stated is not valid! It must be true/false!");

  const perms = role.permissions.toArray();

  if (query === "false") {
    perms.push("SEND_MESSAGES");
    console.log(perms)
    await role.edit({ permissions: perms });
    message.reply("Server is unlocked!");
  } else {
    const newPerms = perms.filter((perm) => perm |= 'SEND_MESSAGES');
    console.log(newPerms);

    await role.edit({ permissions: newPerms});
    message.channel.send(`Server is now locked down by ${message.author.tag}`)
  }
}