
const { Telegraf } = require('telegraf')
const { exec } = require('child_process');

const dotenv = require('dotenv');
dotenv.config()


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('appizza', (ctx) => appizza(ctx))
bot.command('ammazza', (ctx) => ammazza(ctx))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

function appizza(ctx){
    exec('cd paperotto | java -Xmx2500M -Xms2500M -jar server.jar nogui', (err, stdout, stderr) => {
        if (err) {
          //some err occurred
          ctx.reply(err)
        } else {
         // the *entire* stdout and stderr (buffered)
         ctx.reply(`stdout: ${stdout}`);
         ctx.reply(`stderr: ${stderr}`);
        }
      });
}

function ammazza(ctx){
    ctx.reply('ammazza')
}