import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:userId", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user/", homeController.deleteUser);
  router.get("/edit/user/:userId", homeController.getEditUser);
  router.post("/update-user", homeController.updateUser);

  return app.use("/", router);
};

export default initWebRoute;
