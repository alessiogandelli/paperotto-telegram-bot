
const { Telegraf } = require('telegraf')
const shell = require('shelljs')



const dotenv = require('dotenv');
dotenv.config()


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('appizza', (ctx) => appizza(ctx))
bot.command('ammazza', (ctx) => ammazza(ctx))
bot.command('giomagi',(ctx)=> giomagi(ctx))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

function appizza(ctx){
    shell.exec('/home/pi/dev/script/craft.sh')
    ctx.reply('forse ho appizzato')
}

function ammazza(ctx){
    ctx.reply('ammazza')
}

function giomagi(ctx){
    shell.exec('/home/pi/dev/script/giomagi.sh')
    ctx.reply('giomagi al lavoro')
}