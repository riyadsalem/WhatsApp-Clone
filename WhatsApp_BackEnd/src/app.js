import express from "express";
import dotenv from "dotenv";

// dotEnv config
dotenv.config();

// create express app
const app = express();

app.get("/test", (req, res) => {
  res.send("First Route");
});

export default app;
