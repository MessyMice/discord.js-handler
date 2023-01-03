const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Component,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Test for Button"),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle("Link")
        .setLabel("Link")
        .setURL("https://github.com/MessyMice/")
    );
    await interaction.reply({
      content: `Link of github of Creator of this handler is below 👇`,
      components: [row],
    });
  },
};
