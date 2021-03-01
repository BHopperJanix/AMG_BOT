module.exports = {
    name:'serverinfo',
    category: 'info',
    aliases: [''],
    description: 'Shows serverinfo',
    run: async(client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("You do not have enough permissions!");
      message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
}