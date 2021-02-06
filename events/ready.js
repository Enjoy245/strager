const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[VEXY MODERASYON] | Bot hazır hale getirildi.`);
  console.log(`[VEXY MODERASYON] | (${client.user.username}) Kullanıma Hazır !
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("online");
  client.user.setActivity("Vexy Moderation", { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`Coder by : Vexy`);

};
