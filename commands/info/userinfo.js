module.exports = {
    name:'userinfo',
    category: 'info',
    aliases: [''],
    description: 'Says userinfo',
    run: async(client, message, args) => {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

    }
}
