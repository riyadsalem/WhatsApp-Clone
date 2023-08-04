import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieparser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

dotenv.config();
const app = express();

// Middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(cookieparser());
app.use(compression());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/test", (req, res) => {
  res.send(req.body);
});

export default app;
