import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import router from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "UPDATE", "PUT", "PATCH", "DELETE"]
}));

app.use(router)

export default app;