const connect = (credentials) => {
  if (credentials === 'secret key from env variables') {
    return {
      connection: 'This db is now connected',
    };
  } else {
    throw 'Invalid credentials';
  }
};

export default connect;
