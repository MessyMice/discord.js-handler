const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply({
      content: `🏓 Pong! - ${interaction.client.ws.ping}ms`,
      ephemeral: true,
    });
    await wait(2000);
    await interaction.editReply({
      content: `🏓 Pong! - ${interaction.client.ws.ping}ms`,
      ephemeral: true,
    });
  },
};
