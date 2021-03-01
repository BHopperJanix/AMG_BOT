const { MessageEmbed } = require('discord.js')

module.exports = {
    name:'cool',
    category: 'fun',
    aliases: [''],
    description: '',
    run: async(client, message, args) => {
       let random = Math.floor(Math.random() * 101);
       const taggedUser = message.mentions.users.first();
        let myEmbed = new MessageEmbed()
        .setDescription(`${taggedUser.username} is looking **${random}%** good today`)
        .setColor("#0477C2")
        message.channel.send(myEmbed);
    }
}