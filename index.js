const { Client, Intents } = require("discord.js");
const config = require("./config");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
});
client.login(config.TOKEN);


client.on("ready", () => {
    console.log("zeroXbios bot is now online!");
    client.user.setPresence({
        activity: {
            name: "coming soon",
            type: "PLAYING"
        },
        status: "dnd"
    })
});

