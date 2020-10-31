# Discordbot

My personal discord bot I have hacked together.

It has functions for some simple moderation, some silly games, and dice rollers for any set of dice, percentile dice, and Vampire The Masquerade V5 dice set. It also features connection to Lumia Stream for controlling your smart lights.

# Be aware this bot is not for the novice. You will be required to code to modify it's behaviour.


# Installation instructions:

You need to set up a Discord bot account. (either follow these steps or look for a video online for the instructions)
1. Head over to Discord's bot portal: https://discordapp.com/developers/applications/, and create a new application.
2. Make a note of the Client ID, and the secret.
3. Go to the Bot tab, and add the bot.
4. Make a note of the Bot token. Keep this secret as well.
Next part is installing Node.js
1. Head over to https://nodejs.org/, and download Node.js. Either version works.
2. Install node.js and follow the instructions on screen.
Then it's time for this actual project.
1. Download a clone of the repository
2. Extract the repository to where you want your bot to reside.
3. using the terminal/Command line, navigate to your bot's folder.
4. In that folder run the command 
>npm install
5. This will download all the dependencies.
6. OPTIONAL: Activate rest API in Lumia Stream. In Lumia Stream go to Advanced->API And enable REST api. Copy the token.
7. Create a file called .env with the following content: 
>TOKEN=Your Discord BOT token
>LUMIATOKEN=Your Lumia REST API token //This part is only required if you want to use Lumia Stream
>APIURL=http://127.0.0.1:39231/api/send?token=

8. To start the bot you type 
>node index.js

# Customizing the bot
To customize and modify the behaviour of the bot requires coding knowledge.

All bot commands are found in the subfolder commands. You can add, or remove as you see fit.

Setting the prefix used for bot commands is found in index.js 
>const  prefix = "_";


Setting prescence for the bot is found in index.js

> client.user.setPresence({
>    status: "online",
>    game: {
>      name: "me getting developed",
>      type: "WATCHING"
>    }
> });

To add a Lumia Stream trigger to any command make sure

>const {lumiaPost} = require("../../functions.js");

is added at the top of the file. And use this command to trigger:

> lumiaPost(lumiaaction, lumiacode);

Where lumiaaction is the type of action you want to trigger, and lumiacode is the name of the action you want to trigger.
>Ex: lumiaPost("chat-color", "blue");

for more information about the Lumia api go to https://lumiastream/dev/overview/


