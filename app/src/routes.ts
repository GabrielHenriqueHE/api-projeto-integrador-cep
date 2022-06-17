import { Router } from "express";

import index from "./controllers";
import CreateCompanyController from "./controllers/CreateCompanyController";
import CreateInvoiceController from "./controllers/CreateInvoiceController";
import { ReturnCompaniesController } from "./controllers/ReturnCompaniesController";
import { ReturnInvoicesUseCase } from "./entities/useCases/ReturnInvoicesUseCase/ReturnInvoicesUseCase";
import { CreateCompanyMiddleware } from "./middlewares/CreateCompanyMiddleware";
import { CreateInvoiceMiddleware } from "./middlewares/CreateInvoiceMiddleware";

const router = Router();

router.get("/", index);

router.get("/empresas", ReturnCompaniesController);
router.post("/empresas/nova", CreateCompanyMiddleware, CreateCompanyController);

router.get("/notas", ReturnInvoicesUseCase)
router.post("/notas/nova", CreateInvoiceMiddleware, CreateInvoiceController);

export default router;