import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:userId", homeController.getDetailPage);

  return app.use("/", router);
};

export default initWebRoute;
