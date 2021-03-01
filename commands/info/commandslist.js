const { MessageEmbed } = require('discord.js')

module.exports = {
    name:'commands',
    category: 'info',
    aliases: [''],
    description: '',
    run: async(client, message, args) => {
        let myEmbed = new MessageEmbed()
        .setColor('#0477C2')
    .setTitle('')
    .addFields(
        { name: 'Commands', value: 'g!help,g!userinfo,g!hug @someone,g!cool @someone,g!avatar or g!avatar @someone'})
    .setTimestamp()
        message.channel.send(myEmbed);
        console.log()
    }
}