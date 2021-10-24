import { Interaction, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "Testing",
    description: "Testing",

    slash: true,
    testOnly: true,

    callback: async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("ban_yes")
                    .setEmoji("🔨")
                    .setLabel("Confirm")
                    .setStyle("SUCCESS")
            )
            .addComponents(
                new MessageButton()
                    .setCustomId("ban_no")
                    .setLabel("Cancel")
                    .setStyle("DANGER")
            )

        await msgInt.reply({
            content: "Are you sure?",
            components: [row],
            ephemeral: true,
        });

        const filter = (btnInt: Interaction) => {
            return msgInt.user.id === btnInt.user.id
        }

        const collector = channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 1000 * 15
        })
    }
} as ICommand