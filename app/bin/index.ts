import http from "http";
import app from "../src";

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);

console.log(`server is running at port ${process.env.PORT}`)