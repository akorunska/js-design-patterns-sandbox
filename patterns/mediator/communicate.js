import User from './user';
import Messenger from './messenger';

const larry = new User('Larry');
const daenerys = new User('Daenerys');
const john = new User('John');
const sansa = new User('Sansa');

const telegram = new Messenger();

telegram.registerUser(larry);
telegram.registerUser(daenerys);
telegram.registerUser(john);
telegram.registerUser(sansa);

/* eslint-disable no-console */

larry.send('Hello', 'Sansa');
console.log(`Larry received: ${larry.lastReceivedMessage}`);
console.log(`Daenerys received: ${daenerys.lastReceivedMessage}`);
console.log(`John received: ${john.lastReceivedMessage}`);
console.log(`Sansa received: ${sansa.lastReceivedMessage}`);

telegram.createChat('game-of-thrones', [daenerys, john, sansa]);
john.send('Winter is coming', 'game-of-thrones');
console.log(`Larry received: ${larry.lastReceivedMessage}`);
console.log(`Daenerys received: ${daenerys.lastReceivedMessage}`);
console.log(`John received: ${john.lastReceivedMessage}`);
console.log(`Sansa received: ${sansa.lastReceivedMessage}`);

/* eslint-enable no-console */
