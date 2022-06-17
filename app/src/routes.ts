import { Router } from "express";

import index from "./controllers";
import CreateCompanyController from "./controllers/CreateCompanyController";
import CreateInvoiceController from "./controllers/CreateInvoiceController";
import { CreateCompanyMiddleware } from "./middlewares/CreateCompanyMiddleware";
import { CreateInvoiceMiddleware } from "./middlewares/CreateInvoiceMiddleware";

const router = Router();

router.get("/", index);

router.post("/empresas/nova", CreateCompanyMiddleware, CreateCompanyController);

router.post("/notas/nova", CreateInvoiceMiddleware, CreateInvoiceController);

export default router;