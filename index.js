var Telegram = require('node-telegram-bot-api');
var request = require("request");
var token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Configure the bot to use polling
var opt = {
  polling: true
};

var bot = new Telegram(token, opt);

// Event listener for receiving messages
bot.on("message", function(msg) {
  var text = msg.text;

  if (text == '/start') {
    // Send a welcome message
    bot.sendMessage(msg.chat.id, "👋 Hi, I am a bot for downloading TikTok videos without watermark.");
    
    // Delay for 500ms and then send another message
    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }

    delay(500).then(() => bot.sendMessage(msg.chat.id, "✨ Please send the video link"));
  } else if (text.includes('tiktok.com')) {
    // Acknowledge receipt of the TikTok link
    bot.sendMessage(msg.chat.id, "⏳Please wait...");

    // Request the video from the TikTok API
    var reqvideourl = "https://www.tikwm.com/api/?url=" + text;
    request(reqvideourl, function(error, response, body) {
      var json = JSON.parse(body);

      // Check if the video data is available
      if (json.data == undefined) {
        bot.sendMessage(msg.chat.id, "😔 Sorry, I can't download this video right now. Please try again later.");
      } else {
        // Delay for 500ms and then send the video
        function delay(time) {
          return new Promise(resolve => setTimeout(resolve, time));
        }

        delay(500).then(() => bot.sendVideo(msg.chat.id, json.data.play));
      }
    });
  } else {
    // Prompt the user to send a valid link
    bot.sendMessage(msg.chat.id, "🧐 Please send a valid video link");
  }
});