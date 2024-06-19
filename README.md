# TikTok Video Downloader Telegram Bot

## Description
This bot allows users to download TikTok videos without a watermark directly from Telegram. The bot uses the [unoffical TikTok API by TikWM](https://www.tikwm.com) to fetch the video and then sends it back to the user.

## Features
- Downloads TikTok videos without watermarks directly from Telegram.
- Provides clear instructions with `/start` command.
- Handles TikTok video links and sends the video back to the user.
- Offers feedback messages during the download process.
- Notifies users if a video cannot be downloaded.

## Installation

### Prerequisites
- Node.js installed on your machine
- A Telegram bot token from [BotFather](https://core.telegram.org/bots#6-botfather)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/edizbaha/tiktok-downloader.git
   cd tiktok-downloader
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Replace `'YOUR_TELEGRAM_BOT_TOKEN'` with your actual Telegram bot token in the `index.js` file:
   ```javascript
   var token = 'YOUR_TELEGRAM_BOT_TOKEN';
   ```
4. Run the bot:
   ```bash
   node index.js
   ```

## Usage
1. Start a chat with your bot on Telegram.
2. Use the `/start` command to receive a welcome message and instructions.
3. Send a valid TikTok video link.
4. Wait for the bot to download and send the video back to you.

## Example
1. User: `/start`
   - Bot: "👋 Hi, I am a bot for downloading TikTok videos without watermark."
   - Bot: "✨ Please send the video link"
2. User: `https://www.tiktok.com/@username/video/1234567890`
   - Bot: "⏳ Please wait..."
   - Bot: (sends the video)

## Contributing
Feel free to fork this project, submit issues and pull requests. Contributions are welcome! 💖

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact:
- GitHub: [edizbaha](https://github.com/edizbaha)
- Email: [ediz@omg.lol](mailto:ediz@omg.lol)

## Acknowledgements
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - Telegram Bot API for Node.js
- [request](https://github.com/request/request) - Simplified HTTP request client