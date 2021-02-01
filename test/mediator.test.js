import assert from 'assert';
import User from '../patterns/mediator/user';
import Messenger from '../patterns/mediator/messenger';
import MagazinePublisher from '../patterns/observer/magazinePublisher';

describe('Observer', function () {
  const messenger = new Messenger();

  const larry = new User('Larry');
  const daenerys = new User('Daenerys');
  const john = new User('John');
  const sansa = new User('Sansa');

  describe('Communications via messenger mediator', function () {
    it('Unregistered users messenger instance equals undefined', function () {
      assert.strictEqual(
        larry.messenger,
        undefined,
        'Expected unregistered user messenger instance to equal undefined'
      );
    });

    it('Registering user should save messenger instance in user and vice versa', function () {
      messenger.registerUser(larry);

      assert.strictEqual(
        larry.messenger,
        messenger,
        'Expected registered user messenger instance to equal messenger'
      );

      assert.strictEqual(
        ...messenger.chats['Larry'],
        larry,
        'Expected messenger to save user under his username'
      );
    });

    it('Sending message without specifying recipient should result sending message to sender', function () {
      messenger.registerUser(larry);

      larry.send('Hello from Larry to Larry');
      assert.strictEqual(
        larry.lastReceivedMessage,
        '{Larry}: Hello from Larry to Larry',
        'Expected user to send message to himself when not specifying the recepient'
      );
    });

    it('Sends message to certain user by its username results', function () {
      messenger.registerUser(larry);
      messenger.registerUser(john);
      messenger.registerUser(sansa);

      const oldLarryMessage = larry.lastReceivedMessage;

      john.send('Hello from John to Sansa', 'Sansa');

      assert.strictEqual(
        sansa.lastReceivedMessage,
        '{John}: Hello from John to Sansa',
        'Expected user to send message to recipient when specifying recipient'
      );
      assert.strictEqual(
        oldLarryMessage,
        larry.lastReceivedMessage,
        'Expected that users that are not recipients will not receive the message'
      );
    });

    it('Sends message to the group of users when recipient is a chat', function () {
      messenger.registerUser(larry);
      messenger.registerUser(daenerys);
      messenger.registerUser(john);
      messenger.registerUser(sansa);

      messenger.createChat('game-of-thrones', [daenerys, john, sansa]);

      const oldLarryMessage = larry.lastReceivedMessage;

      john.send('Winter is coming', 'game-of-thrones');

      assert.strictEqual(
        sansa.lastReceivedMessage,
        '{John}: Winter is coming',
        'Expected user to send message to all chat participants when specifying group chat'
      );
      assert.strictEqual(
        daenerys.lastReceivedMessage,
        '{John}: Winter is coming',
        'Expected user to send message to all chat participants when specifying group chat'
      );
      assert.strictEqual(
        john.lastReceivedMessage,
        '{John}: Winter is coming',
        'Expected user to send message to all chat participants when specifying group chat'
      );
      assert.strictEqual(
        oldLarryMessage,
        larry.lastReceivedMessage,
        'Expected that users not belonging to group chat will not receive the message'
      );
    });
  });
});
