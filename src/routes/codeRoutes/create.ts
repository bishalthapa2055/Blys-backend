import { Router } from "express";
import { createCodeHandler } from "../../controllers/create";

const router = Router();

router.post("/", createCodeHandler);

export { router as createCodeRouter };
