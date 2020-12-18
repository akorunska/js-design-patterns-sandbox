const connect = (credentials) => {
  if (credentials !== 'secret key from env variables') {
    throw new Error('Invalid credentials');
  }
  return {
    connection: 'This db is now connected',
  };
};

export default connect;
