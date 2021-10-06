"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
//not found
app.use((_req, _res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
//catch all
app.use((error, _req, res, _next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
});
app.listen(process.env.PORT || 3001, () => console.log('Server is running'));
