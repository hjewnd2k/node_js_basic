import express from "express";

const viewConfig = (app) => {
  app.use(express.static("./src/public"));
};

export default viewConfig;
