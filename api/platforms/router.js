import { Router } from "express";
import googleLeadsFetch from "./google/leads.fetch.js";
import metaLeadsFetch from "./meta/leads.fetch.js";

const metaRouter = Router();

metaRouter.get("/google", googleLeadsFetch);
metaRouter.get("/meta", metaLeadsFetch);

export default metaRouter;
