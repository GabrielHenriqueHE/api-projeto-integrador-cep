import { Router } from "express";

import index from "./controllers";
import CreateCompanyController from "./controllers/CreateCompanyController";
import { CreateCompanyMiddleware } from "./middlewares/CreateCompanyMiddleware";

const router = Router();

router.get("/", index);

router.post("/empresas/nova", CreateCompanyMiddleware, CreateCompanyController);

export default router;