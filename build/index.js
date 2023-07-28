"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
//npm prisma generate && next build
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on ${port}`);
});
