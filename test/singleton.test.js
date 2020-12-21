import assert from 'assert';
import dbConnection from '../patterns/singleton/databaseConnection';

describe('Singleton', function () {
  const connectionText = 'This db is now connected';

  describe('DB connection', function () {
    it('DB connection is initialized with correct value if credentials are set', function () {
      const connectionInstance = dbConnection.getInstance();

      assert.strictEqual(
        connectionInstance.connectionObject.connection,
        connectionText,
        'Expected connection text to be correct'
      );
    });

    it('Private variables should not be accessible', function () {
      const connectionInstance = dbConnection.getInstance();

      assert.strictEqual(
        connectionInstance.connectionCredentials,
        undefined,
        'Private variables should not be accessilbe'
      );
    });

    it('DB connection getInstance returns object with same reference', function () {
      const connectionInstance1 = dbConnection.getInstance();
      const connectionInstance2 = dbConnection.getInstance();

      assert.strictEqual(
        connectionInstance1,
        connectionInstance2,
        'Object reference should remain the same'
      );
    });
  });
});
