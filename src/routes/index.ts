import express from "express";
import { Router } from "express";
import { indexCodeRouter } from "./codeRoutes";

const router = Router();

router.use("/code", indexCodeRouter);

export { router as indexRouter };
