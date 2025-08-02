const express = require("express");
const connectToDatabase = require("./database/db");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());

connectToDatabase(DB_URL)
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
