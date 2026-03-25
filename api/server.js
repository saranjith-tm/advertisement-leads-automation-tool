import express from "express";
import googleRouter from "./platforms/router.js";

const app = express();
const APP_PORT = process.env.APP_PORT || 4578;

app.use("/platform", googleRouter);

app.listen(APP_PORT);
console.log(`Advertisement Leads Automation Tool Server Running On Port ${APP_PORT}`);
