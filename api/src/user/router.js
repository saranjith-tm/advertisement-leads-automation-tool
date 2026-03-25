import { Router } from "express";
import userSignin from "./signin.js";

const userRouter = Router();

userRouter.get("/signin", userSignin);

export default userRouter;
