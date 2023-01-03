const gradient = require("gradient-string");
const { Events, Activity } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(
      gradient(
        "green",
        "lime",
        "yellow"
      )(`
          
░█████╗░███╗░░░███╗██████╗░
██╔══██╗████╗░████║██╔══██╗
██║░░╚═╝██╔████╔██║██║░░██║
██║░░██╗██║╚██╔╝██║██║░░██║
╚█████╔╝██║░╚═╝░██║██████╔╝
░╚════╝░╚═╝░░░░░╚═╝╚═════╝░
Ready! Logged in as ${client.user.tag}`)
    );
    client.user.setPresence({
      activities: [{ name: `with DJS V14` }],
      status: "dnd",
    });
  },
};
