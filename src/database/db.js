const mongoose = require('mongoose');

const connectToDb = async (connectionString) => {
  try {
    const connection = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDb;
