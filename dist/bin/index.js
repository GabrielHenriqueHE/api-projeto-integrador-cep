"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const src_1 = __importDefault(require("../src"));
const server = http_1.default.createServer(src_1.default);
const PORT = 3000;
server.listen(PORT);
console.log(`server is running at port ${PORT}`);
