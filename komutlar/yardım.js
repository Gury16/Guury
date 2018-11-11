const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `!banned = Dene ve Gör! \n!avatarım = Avatarınınızı Gösterir. \n!herkesebendençay = Herkese Çay Ismarlarsınız Hemde Beleş .d . \n!koş = Ebenin A*ına Kadar Koşarsınız.\n!çayiç = Çay Yeresniz (evet bu sunucuda çay yenilebiliyor). \n!çekiç = İstediğiniz Kişinin Ağzının Ortasına Çekici Vurursunuz. \n!çayaşekerat = Çaya Şeker Fırlatırsınız. \n!yumruh-at = Okkalı Bir Yumruk Atarsınız. \n!yaz = Bota İstediğiniz Şeyi Yazdırırsınız (köle falan değilim .s ). \n!sunucuresmi = BOT Sunucunun Taşşaklımı Olan Taşşaklı Resmini Atar. \n!sunucubilgi = BOT Sexsi Sunucumuz Hakkında Bilgi Verir. \n!kullanıcıbilgim = Nabcan Kendi Hakkında Bilgiyi Neyse Yazda Gör mk. `)
  .addField("**Yetkilisi Komutlar**", `!ban = İstediğiniz Kişiyi Sunucudan Götünden Tekmeyi Koyar. \n!kick  = İstediğiniz Kişiyi Sunucudan Yollar SG. \n!unban = İstediğiniz Kişiye Götüne Koyduğunuz Tekmeyi Geri Alırsınız (eminmisin knk?). \n!sustur = İstediğiniz Kişinin Ağzına Ya**ak Sokar :D (tehlikeeee). \n!oylama = Oylama Sandığı Kurur. \n!duyuru = Sexsi Bir Şekilde Duyuru Yaparım Dene Ve Gör.`)
  .addField("**Ana Komutlar**", "?yardım = BOT Komutlarını Atar. \n?bilgi = BOT Kendisi Hakkında Bilgi Verir. \n?ping = BOT Gecikme Süresini Söyler. \n?davet = BOT Davet Linkini Atar. \n?istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Gosmac#3416** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
