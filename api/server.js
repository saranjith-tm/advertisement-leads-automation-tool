import express from "express";
import platForm from "./src/platforms/router.js";
import userRouter from "./src/user/router.js";

const app = express();
const APP_PORT = process.env.APP_PORT || 4578;

app.use("/platform", platForm);
app.use("/user", userRouter);

app.listen(APP_PORT);
console.log(`Advertisement Leads Automation Tool Server Running On Port ${APP_PORT}`);
