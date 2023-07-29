const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound,errorHandler}=require("./middleware/errorMiddleware")
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json())


//This is for handling errors
app.use(notFound)
app.use(errorHandler)
app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/api/user", userRoutes);
app.listen(port, () => {
  console.log(`listening on port${port}`);
});
