"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const CreateCompanyController_1 = __importDefault(require("./controllers/CreateCompanyController"));
const CreateCompanyMiddleware_1 = require("./middlewares/CreateCompanyMiddleware");
const router = (0, express_1.Router)();
router.get("/", controllers_1.default);
router.post("/empresas/nova", CreateCompanyMiddleware_1.CreateCompanyMiddleware, CreateCompanyController_1.default);
exports.default = router;
