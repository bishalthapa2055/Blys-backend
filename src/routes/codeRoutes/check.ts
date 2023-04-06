import { Router } from "express";
import { checkCodeHandler } from "../../controllers/check";

const router = Router();

router.post(
  "/login",

  checkCodeHandler
);

export { router as checkCodeRouter };
