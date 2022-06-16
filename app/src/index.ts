import bodyParser from "body-parser";
import express from "express";

import router from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router)

export default app;