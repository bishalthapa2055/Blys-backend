import { Router } from "express";
import { createCodeRouter } from "./create";
import { checkCodeRouter } from "./check";

const router = Router();

router.use(createCodeRouter);
router.use(checkCodeRouter);

export { router as indexCodeRouter };
