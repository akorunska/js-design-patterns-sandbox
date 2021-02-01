class Messenger {
  constructor() {
    this.chats = {};
  }

  registerUser(user) {
    this.chats[user.username] = [user];
    user.setMessenger(this);
  }

  createChat(chatName, participantsList) {
    this.chats[chatName] = participantsList;
  }

  sendMessage(messageText, from, chatId) {
    if (!chatId) {
      from.deliverMessage(`{${from.username}}: ${messageText}`);
    } else {
      const participants = this.chats[chatId];
      participants.forEach((user) => {
        user.deliverMessage(`{${from.username}}: ${messageText}`);
      });
    }
  }
}

export default Messenger;
