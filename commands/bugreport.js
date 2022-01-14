const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
        if (message.author.bot) return;
        const ReportMessage = message.content.slice(11).trim();
        let valid = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Your Report Has Been Sent')
        .setDescription('Thanks for reporting a bug. This will help us improve much better.')
        .addField(`Reported by ${message.author.tag}`, 'Please wait for the developer to reply your report!')
        .addField('Your message :', `${ReportMessage}`)
        .addField('Next Step :', `Please allow AtMostFear#7752 to add you as a friend so that the developer can contact you immediately, or join the Support server [here](https://discord.gg/6XSjbKBbJT)`)
        .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')
        .setFooter('Luxio Bug Report Center')
        message.channel.send(valid)
        const channel = client.channels.cache.get('928859046461718579')
        const ReportEmbed = new Discord.MessageEmbed()
            .setColor('#b700ff')
            .setTitle('Bug Report')
            .setDescription(ReportMessage)
            .addField(`Report Status :`, '**Received**')
            .addField(`Action :`, '<@820833801692250132> Please reply to this report ASAP')
        channel.send(`||${message.author.tag}||` + "**'s Report : - **")
        channel.send(ReportEmbed)
}
