/*Global Import*/
const dotenv = require('dotenv');
const Telegraf = require('telegraf');

const markup = require('./markup');

//Env variable configuration
dotenv.config({ path: './config.env' });
const { apiKey } = process.env;

//Create a bot
const bot = new Telegraf(apiKey);

function sendStartMessage(ctx) {
	let message = `
	Select Day
	`;
	bot.telegram.sendMessage(ctx.chat.id, message, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Monday', callback_data: 'mon' }],
				[{ text: 'Tuesday', callback_data: 'tue' }],
				[{ text: 'Wenesday', callback_data: 'wed' }],
				[{ text: 'Thrusday', callback_data: 'thr' }],
				[{ text: 'Friday', callback_data: 'fri' }],
				[{ text: 'Saturday', callback_data: 'sat' }]
			]
		}
	});
}

//All Command
bot.command('start', (ctx) => sendStartMessage(ctx));

bot.action('start', (ctx) => {
	ctx.deleteMessage();
	sendStartMessage(ctx);
});

bot.action('mon', (ctx) => {
	ctx.deleteMessage();
	let lecture = 'Select Subject to go in lecture';
	bot.telegram.sendMessage(ctx.chat.id, lecture, {
		reply_markup: {
			inline_keyboard: markup.monday
		}
	});
});

bot.action('tue', (ctx) => {
	let lecture = 'Select Subject to go in lecture';
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, lecture, {
		reply_markup: {
			inline_keyboard: markup.tuesday
		}
	});
});

bot.action('wed', (ctx) => {
	let lecture = 'Select Subject to go in lecture';
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, lecture, {
		reply_markup: {
			inline_keyboard: markup.wednesday
		}
	});
});

bot.action('thr', (ctx) => {
	let lecture = 'Select Subject to go in lecture';
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, lecture, {
		reply_markup: {
			inline_keyboard: markup.thrusday
		}
	});
});

bot.action('fri', (ctx) => {
	let lecture = 'Select Subject to go in lecture';
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, lecture, {
		reply_markup: {
			inline_keyboard: markup.friday
		}
	});
});

bot.action('sat', (ctx) => {
	let lecture = 'Select Subject to go in lecture';
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, lecture, {
		reply_markup: {
			inline_keyboard: markup.saturday
		}
	});
});

bot.launch();
