import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoutes from "./routes/tours.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

//testing
app.get("/", (req, res) => {
  res.send("Api is Running...");
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/tours", tourRoutes);

//server
app.listen(port, async () => {
  try {
    await connect();
    console.log("Server is running on port", port);
  } catch (error) {
    console.error("Error connecting to the database:");
  }
});
