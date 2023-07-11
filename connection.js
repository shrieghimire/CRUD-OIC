const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myMongoDB");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

module.exports = Connection;
