const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\\

if(!"KOMUTU KULLANABİLECEK YETKİLİ İD".some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(
  new Discord.MessageEmbed()
  .setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`)
  .setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\\
  let vexy = "**Sesli Kanalda Olan Yetkililer:**\n";
  let vexyy = "**Sesli Kanalda Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get("yetkili rolü").members.map(r => {
    vexy += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    vexyy += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const vexyembedli = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + vexy + "" + vexyy + "")
  message.channel.send(vexyembedli).then(s => s.s);
};
module.exports.conf = {
  aliases: ["sesli"]
};

module.exports.help = {
  name: "sesteki-yetkililer"
};