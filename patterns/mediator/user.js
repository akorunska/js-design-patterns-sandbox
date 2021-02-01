class User {
  constructor(username) {
    this.username = username;
    this.messenger = undefined;
    this.lastReceivedMessage = '';
  }

  setMessenger(messenger) {
    this.messenger = messenger;
  }

  deliverMessage(messageText) {
    this.lastReceivedMessage = messageText;
  }

  send(message, to) {
    this.messenger.sendMessage(message, this, to);
  }
}

export default User;
