const fs = require('fs-extra');
const path = require('path');

const messages_filename = path.join(__dirname, '..', '..', 'chat.json');

class ChatService {
  constructor() {
    this.messages = [];
  }

  loadMessages() {
    return fs
      .readJson(messages_filename)
      .then(messages => {
        this.messages = messages;  
      })
      .catch(err => {
        console.log(`Cannot load chat messages ${err.message}`);
      });
  }

  saveMessages() {
    return fs.writeJson(messages_filename, this.messages);
  }

  newMessage(message) {
    this.messages.push(message);
    this.saveMessages();
  }

  getMessages() {
    return this.messages;
  }
}

module.exports = new ChatService();