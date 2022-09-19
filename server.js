const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./index");
const { PORT, DB_URL } = process.env;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL, () => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => {
  console.log("It is running");
  dbConnection();
});
