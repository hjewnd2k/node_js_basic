import express from "express";
import dotenv from "dotenv";
import viewConfig from "./config/viewConfig.js";
import initWebRoute from "./routes/web.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

viewConfig(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
