const Discord = require('discord.js');


exports.help = {
  name: 'tutoriel',
  aliases: ['tuto'],
  description: 'Affiche un rapide tutoriel sur le bot',
  use: 'Pas d\'utilisation conseillée',
  category: 'Utilitaire'
}
exports.run = async (bot, message, args, config, data) => {
    const ArrayDescription = [
        {
            text: `# Commencons par de simples informations:
            - [CoinsBot](https://discord.gg/Kiyun) est un bot économie/rp développé depuis 2024, il existe une [version Wazaaa](https://discord.gg/wazaaa) & des personnalisables
            - CoinsBot c'est plus de \`2k\` joueurs différents
            - Avec plus de **100 commandes** ce bot est rapidement addictif car facile d'utilisation
            - La monnaie de ce bot est le \`coins\` :coin:
            - Le prefix du bot sur ce serveur est \`${data.prefix}\` il faudra le mettre devant chacune des commandes que vous faites !\n\n> **Page suivante:** \`Comment jouer ?\``,
            title: `Bienvenue dans le tutoriel de CoinsBot®`,
            icon: `https://media.discordapp.net/attachments/1300616641369079819/1320839796775456840/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b0f6b&is=6769bdeb&hm=99befc31488745477861ab0a828be22d8f1ae9f5b5363cdbcaba70ae2f2426d3&=&format=webp`
        },
        {
            text: `Pour commencer votre aventure vous pouvez dès maintenant rejoindre un vocal du serveur, en effet le bot vous donnera 0 🪙 chaque 15 minutes de vocal !
    
            Faites maintenant les commandes \`work\` \`daily\` et \`slut\`, ce sont des commandes de bases pour gagner une somme d'argent quotidiennement
            
            ⚠️ Veillez à **toujours déposer vos coins en banque** en faisant \`dep all\` afin de ne pas vous faire voler !\n\n> **Page suivante:** \`Comment avoir beaucoup de coins ?\``,
            title2: `🤖 Comment jouer à CoinsBot ?`,
        },
        {
            text: `Une manière simple de multiplier vos coins est de les jouer dans **les mini-jeux** !
            En effet il existe une dizaine de mini-jeux, les principaux sont le \`blackjack\`, la \`roulette\` et le \`slots\`, et ensuite préciser la somme que vous souhaitez jouer !
            
            ⚠️ Pour jouer ces coins vous devez les sortir de votre banque en faisant \`with all\` puis par exemple pour jouer à la roulette faire \`${data.prefix}roulette 100 red\`
            
            Dans les pages suivantes nous allons vous en indiquez quelques unes\n\n> **Page suivante:** \`Les bâtiments\``,
            title2: `🔥 Comment avoir beaucoup de coins ?`,
        },
        {
            text: `Vous pouvez via la commande \`shop\` acheter des bâtiments, plus ils sont chères plus ils vous rapporteront de l'argent toutes les 2/3 heures !
            Pour récolter l'argent qu'ils produisent vous devez utiliser la commande \`batiments\`\n\n> **Page suivante:** \`Les alliances\``,
            title2: `🏛️ Les bâtiments:`,
        },
    ]

    let page = 0, pageTotal = ArrayDescription.length
    const embed = new Discord.EmbedBuilder()
    .setColor(data.color)
    .setThumbnail(`https://media.discordapp.net/attachments/1300616641369079819/1320839796775456840/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b0f6b&is=6769bdeb&hm=99befc31488745477861ab0a828be22d8f1ae9f5b5363cdbcaba70ae2f2426d3&=&format=webp`)
    .setFooter({ text: `Page ${page + 1}/${pageTotal} ` + config.footerText })
    .setDescription(ArrayDescription[page].text)
    .setAuthor({ name: ArrayDescription[page].title, iconURL: ArrayDescription[page].icon })

    const row = new Discord.ActionRowBuilder().addComponents([
        new Discord.ButtonBuilder()
            .setStyle(Discord.ButtonStyle.Primary)
            .setEmoji('⬅️')
            .setCustomId('pageBefore'),

        new Discord.ButtonBuilder()
            .setStyle(Discord.ButtonStyle.Primary)
            .setEmoji('➡️')
            .setCustomId('pageAfter'),
    ])

    const msg = await message.reply({ embeds: [embed], components: [row]})

    const collector = msg.createMessageComponentCollector({ time: 60000 })

    collector.on("collect", async (select) => { 
        if (select.user.id !== message.author.id) return select.reply({ content: "Vous n'avez pas la permission !", ephemeral: true }).catch(() => { })
        if(select.customId == "pageBefore") {
            if(page == 0) page = ArrayDescription.length
            page--
            if(page == 0) select.update({ embeds: [embed.setTitle(null).setThumbnail(https://media.discordapp.net/attachments/1300616641369079819/1320839796775456840/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b0f6b&is=6769bdeb&hm=99befc31488745477861ab0a828be22d8f1ae9f5b5363cdbcaba70ae2f2426d3&=&format=webp`).setFooter({ text: `Page ${page + 1}/${pageTotal} ` + config.footerText }).setDescription(ArrayDescription[page].text).setAuthor({ name: ArrayDescription[page].title, iconURL: ArrayDescription[page].icon })] })
            else select.update({ embeds: [embed.setDescription(ArrayDescription[page].text).setTitle(ArrayDescription[page].title2).setFooter({ text: `Page ${page + 1}/${pageTotal} ` + config.footerText }).setAuthor(null)]})
        } else if(select.customId == "pageAfter") {
            if(page == ArrayDescription.length - 1) page = 0 - 1
            page++
            if(page == 0) select.update({ embeds: [embed.setTitle(null).setThumbnail(`https://media.discordapp.net/attachments/1300616641369079819/1320839796775456840/f95a8292c1dd5a9d93229f116ee2f8f3.jpg?ex=676b0f6b&is=6769bdeb&hm=99befc31488745477861ab0a828be22d8f1ae9f5b5363cdbcaba70ae2f2426d3&=&format=webp`).setFooter({ text: `Page ${page + 1}/${pageTotal} ` + config.footerText }).setDescription(ArrayDescription[page].text).setAuthor({ name: ArrayDescription[page].title, iconURL: ArrayDescription[page].icon })] })
            else select.update({ embeds: [embed.setDescription(ArrayDescription[page].text).setTitle(ArrayDescription[page].title2).setFooter({ text: `Page ${page + 1}/${pageTotal} ` + config.footerText }).setAuthor(null)]})
        }
    })

}
