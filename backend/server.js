const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors");
const {notFound,errorHandler}=require("./middleware/errorMiddleware")
dotenv.config();
connectDB();
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


app.use(express.json())

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/api/user", userRoutes);
app.use("/api/chats", chatRoutes);

//This is for handling errors
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`listening on port${port}`);
});
