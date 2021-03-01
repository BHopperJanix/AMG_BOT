const Discord = require('discord.js');
 
module.exports = {
    name: 'avatar',
    description: 'returns a users avatar',
    execute(message, args){
        //const {prefix} = require ('./config.json');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle(message.author.tag)
            embed.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
            embed.setColor("#0477C2")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(user.tag)
            embed.setThumbnail(user.displayAvatarURL({dynamic : true}))
            embed.setColor('#0477C2')
            
            return message.channel.send(embed)
        }
    }
}