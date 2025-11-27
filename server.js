import express from "express";
import cors from "cors";
import { mongooseConnect } from "./config/mongoConfig";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API endpoint for Healthcare");
});

mongooseConnect()
  .then(() => {
    server.listen(config.port, () => {
      console.log(`✅ Server started on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MONGO DB CONNECTION ERROR:", err.message);
  });
