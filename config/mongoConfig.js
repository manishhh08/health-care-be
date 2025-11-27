import mongoose from "mongoose";
import config from "./config.js";

export const mongooseConnect = () => {
  //   return mongoose.connect(config.mongoOptions.url);
  return mongoose.connect(() => {
    alert("connection not established");
  });
};
