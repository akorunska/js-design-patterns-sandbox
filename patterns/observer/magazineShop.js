import MagazinePublisher from './magazinePublisher';
import Customer from './customer';

class MagazineShop {
  constructor() {
    this.publishers = {};
  }

  addPublisher(publisherId, publisher) {
    this.publishers[publisherId] = publisher;
  }

  subscribe(publisherId, user) {
    this.publishers[publisherId].addObserver(user);
  }
}
const voguePublisher = new MagazinePublisher();
const shop = new MagazineShop();
shop.addPublisher('Vogue', voguePublisher);

const larry = new Customer('Larry');
const jane = new Customer('Jane');

shop.subscribe('Vogue', larry);
voguePublisher.publishNewMagazineNumber();
// eslint-disable-next-line no-console
console.log(
  `larry: ${larry.lastReceivedMagazine}, jane: ${jane.lastReceivedMagazine}`
);

shop.subscribe('Vogue', jane);
voguePublisher.publishNewMagazineNumber();
// eslint-disable-next-line no-console
console.log(
  `larry: ${larry.lastReceivedMagazine}, jane: ${jane.lastReceivedMagazine}`
);
