import assert from 'assert';
import MagazinePublisher from '../patterns/observer/magazinePublisher';
import Customer from '../patterns/observer/customer';

describe('Observer', function () {
  const publisher = new MagazinePublisher();

  describe('Magazine publisher subscriptions', function () {
    it('Magazine publisher successfully adds customers to the subscription list', function () {
      const larry = new Customer('Larry');
      const jane = new Customer('Jane');
      const terry = new Customer('Terry');

      assert.strictEqual(
        publisher.observersCount(),
        0,
        'Expected observers count to be 0'
      );

      publisher.addObserver(larry);
      assert.strictEqual(
        publisher.observersCount(),
        1,
        'Expected observers count to be 1'
      );

      publisher.addObserver(jane);
      assert.strictEqual(
        publisher.observersCount(),
        2,
        'Expected observers count to be 2'
      );
      assert.strictEqual(
        publisher.containsObserver(larry),
        true,
        'Expected publisher to know about new observer'
      );
      assert.strictEqual(
        publisher.containsObserver(jane),
        true,
        'Expected publisher to know about new observer'
      );
      assert.strictEqual(
        publisher.containsObserver(terry),
        false,
        'Expected publisher not to know about observers that were not subscribed'
      );
    });

    it('Magazine pubished successfully deletes customers from its subscription list', function () {
      const maria = new Customer('Maria');
      publisher.addObserver(maria);

      const oldSubscribersAmount = publisher.observersCount();
      publisher.removeObserver(maria);
      const newSubscribersAmount = publisher.observersCount();

      assert.strictEqual(
        oldSubscribersAmount - newSubscribersAmount,
        1,
        'Expected new subscribers amount to be less by 1'
      );
      assert.strictEqual(
        publisher.containsObserver(maria),
        false,
        'Expected publisher not to know about observers that were unsubscribed'
      );
    });

    it('Last magazine number received by customer is -1 by default', function () {
      const dave = new Customer('Dave');

      assert.strictEqual(
        dave.lastReceivedMagazine,
        -1,
        'Expected last received magazine number to be -1 by default'
      );
      publisher.addObserver(dave);
      assert.strictEqual(
        dave.lastReceivedMagazine,
        -1,
        'Expected last received magazine number to be -1 after customer subscribed'
      );
    });

    it('Customers on the subscription list receive notifications about the new magazine', function () {
      const lucy = new Customer('Lucy');
      const lara = new Customer('Lara');

      publisher.addObserver(lucy);
      publisher.publishNewMagazineNumber();

      assert.strictEqual(
        lucy.lastReceivedMagazine,
        publisher.currentMagazineNumber,
        'Expected Lucy to receive new magazine, since she is subscribed'
      );
      assert.strictEqual(
        lara.lastReceivedMagazine,
        -1,
        'Expected Lara not to receive new magazine, since she is not subscribed'
      );

      publisher.addObserver(lara);
      publisher.publishNewMagazineNumber();

      assert.strictEqual(
        lucy.lastReceivedMagazine,
        publisher.currentMagazineNumber,
        'Expected Lucy to receive new magazine, since she is subscribed'
      );
      assert.strictEqual(
        lara.lastReceivedMagazine,
        publisher.currentMagazineNumber,
        'Expected Lara to receive new magazine, since she is subscribed'
      );

      publisher.removeObserver(lucy);
      publisher.publishNewMagazineNumber();

      assert.strictEqual(
        lucy.lastReceivedMagazine,
        publisher.currentMagazineNumber - 1,
        'Expected Lucy not to receive new magazine, since she is not subscribed'
      );
      assert.strictEqual(
        lara.lastReceivedMagazine,
        publisher.currentMagazineNumber,
        'Expected Lara to receive new magazine, since she is subscribed'
      );
    });
  });
});
