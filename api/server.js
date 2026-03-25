import express from "express";

const app = express();
const APP_PORT = process.env.APP_PORT || 4578;

app.listen(APP_PORT);
console.log(`Advertisement Leads Automation Tool Server Running On Port ${APP_PORT}`);
