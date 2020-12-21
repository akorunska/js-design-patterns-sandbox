import connect from './database';

const dbConnection = () => {
  // stores reference to dbConnection singleton
  let instance;

  const init = () => {
    // private variables and methods
    const connectionCredentials = 'secret key from env variables';
    const establishConnection = () => {
      try {
        return connect(connectionCredentials);
      } catch (e) {
        return null;
      }
    };

    return {
      // public variables and methods
      connectionObject: establishConnection(),
    };
  };

  return {
    // init connection if it exists or initiate new one
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
};

export default dbConnection();
