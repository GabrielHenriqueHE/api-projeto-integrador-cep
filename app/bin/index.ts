import http from "http";
import app from "../src";

const server = http.createServer(app);

const PORT = process.env.PORT || 5500;

server.listen(PORT);

console.log(`server is running at port ${PORT}`);