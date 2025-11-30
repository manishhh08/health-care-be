import express from "express";
import cors from "cors";
import config from "./config/config.js";
import { mongooseConnect } from "./config/mongoConfig.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API endpoint for Healthcare");
});

// api error handler
app.all("/^/.*$/", (req, res, next) => {
  next(createApiError(`Cannot find ${req.originalUrl} on this server`, 404));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

mongooseConnect()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`✅ Server started on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MONGO DB CONNECTION ERROR:", err.message);
  });
