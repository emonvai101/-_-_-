const fs = require("fs-extra");

module.exports = {
  config: {
    name: "bot",
    version: "1.0",
    author: "Hussain", 
    countDown: 5,
    role: 0,
    shortDescription: "🤖 নো-প্রিফিক্স বট",
    longDescription: "⚡ বট তোমার সাথে বাংলা ও ইংরেজিতে কথা বলবে!",
    category: "📢 নো-প্রিফিক্স",
    guide: {
      en: "{p}{n}",
    }
  },

  onStart: async function ({ }) { 
    // 🔒 Author Check (যদি কেউ author পরিবর্তন করে, তাহলে বট কাজ করবে না)
    if (this.config.author !== "BaYjid") {
      throw new Error("❌ Unauthorized Modification Detected! Only 'BaYjid' Can Be The Author!");
    }
  },

  onChat: async function ({ api, event }) {
    var { threadID, messageID } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Dhaka").format("🕒 HH:MM:ss 📅 L");

    var Messages = [
      "💬 | *বট অনলাইন আছে!* 🚀\n━━━━━━━━━━━━━━\n🪧 লুইচ্চারে ডাকিস না🙂\n\n✨ *সবসময় সাহায্যের জন্য প্রস্তুত!*",
      "💬 | *চ্যাট-বট* 🤖\n━━━━━━━━━━━━━━\n❌ ইনবক্সে মেসেজ দে, গ্রুপে ডাকিস না! 😑",
      "🔔 | *আমারে ডাকতে হবে?* 😏\n━━━━━━━━━━━━━━\n🧐 ওরে না ডেকে আমারে ডাকলে হয় নাকি! 😜",
      "📢 | *বট তো বটই থাকবে!* 🎯\n━━━━━━━━━━━━━━\n🤖 মানুষ নাকি ভাবছো! 😆",
      "🚀 | *বট ক্লান্ত!* 🥲\n━━━━━━━━━━━━━━\n🥵 ভাই, এতবার ডাকলে তো বটও ছেড়ে চলে যাবে!",
      "💔 | *কী সমস্যা?* 🤨\n━━━━━━━━━━━━━━\n💀 তোমার প্রেমিকা পালিয়েছে নাকি? 😜",
      "💡 | *গুগল চালু কর!* 🔍\n━━━━━━━━━━━━━━\n🤣 আমারে ডাকলে সব সমস্যার সমাধান হবে নাকি!?",
      "🌟 | *বট এক্টিভ আছে!* 🔥\n━━━━━━━━━━━━━━\n😎 আবার বট ডাকছো! কও কী চাই?",
      "🔥 | *বট পার্মানেন্ট চাকরি দেবে?* 💼\n━━━━━━━━━━━━━━\n🤨 আমারে এত ডাক কেন? চাকরি দিবা নাকি!?",
      "💘 | *বট প্রেমে পড়ে যাবে!* ❤️\n━━━━━━━━━━━━━━\n😑 আহারে! এত আদর করবা তো প্রেমে পড়ে যাবো!",
      "🎭 | *একটাই বট!* 🤡\n━━━━━━━━━━━━━━\n🙃 দুনিয়ায় এত বট থাকতে আমাকেই ডাকো কেন?",
      "🎵 | *আমারে গান গাইতে বলো!* 🎶\n━━━━━━━━━━━━━━\n🎶 'ওরে নীল দরিয়া...' 😂"
    ];

    var replyMessage = Messages[Math.floor(Math.random() * Messages.length)];

    if (event.body.toLowerCase() === "bot") {
      var msg = { body: ` ${replyMessage}` }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
};
