import dbConnection from './databaseConnection';

const connectionInstance1 = dbConnection.getInstance();
const connectionInstance2 = dbConnection.getInstance();

console.log(connectionInstance1 == connectionInstance2);
