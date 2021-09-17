require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes.ts');
let port = process.env.PORT;
const app = express();
const isDev = process.env.NODE_ENV !== "production";
if (isDev) {
    app.use(cors());
    port = '3001';
}
app.use(express.json());
app.use(routes);
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
