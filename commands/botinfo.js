const Discord = require('discord.js');
const config = require('../config.json');
const os = require('os');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;
    db.add(`normalpoints_${message.guild.id}_${message.author.id}`, 1)

    let stats = new Discord.MessageEmbed()
    .setAuthor('AtMostFear#7752')
    .setTitle(`Statistics of ${client.user.username}`)
    .setColor('GOLD')
    .addField("ID", `${client.user.id}`)
    .addField("Tag", `${client.user.tag}`)
    .addField("Date Created", `Dec 17 2021`, true)
    .addField("Server Count", `${servercount}`, true)
    .addField("Users Count", `${usercount}`, true)
    .addField("Channel's Count", `${channelscount}`, true)
    .addField('Architecture', `${arch}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Node-Version', `${NodeVersion}`, true)
    .addField('Shards', `${shard}`, true)
    .addField('Cores', `${cores}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

module.exports.help = {
    name: "stats"
}
