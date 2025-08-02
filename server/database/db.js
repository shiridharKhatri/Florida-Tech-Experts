const mongoose = require("mongoose");
const connectToDatabase = (URL) => {
  try {
    const connection = mongoose.connect(URL);
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
module.exports = connectToDatabase;
