import express from "express";
import { getHomePage } from "../controllers/homeControler.js";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  return app.use("/api", router);
};

export default initWebRoute;
