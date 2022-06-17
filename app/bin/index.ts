import http from "http";
import app from "../src";

import dotenv from "dotenv";

dotenv.config()

const server = http.createServer(app);

const PORT = process.env.PORT || 5500;

server.listen(PORT);

console.log(`server is running at port ${PORT}`);