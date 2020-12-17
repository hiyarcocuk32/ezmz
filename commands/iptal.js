const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
  
  
const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setFooter(message.guild.name)
.setColor('#9dfca0')
.setTimestamp()
  
  
  if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Sesli bir kanalda bulunman gerekiyor.`)
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`<:voice:720120618275831869> Bir müzik çalmıyor.`)
  
  let song = await client.player.stop(message.guild.id);

  message.channel.send(embed.setDescription(`<:voice:720120618275831869> ${client.user.username} Çalınan şarkı iptal edildi.`))


}

module.exports.config = {
  name: "iptal",
  aliases: ['disconnect']
}
