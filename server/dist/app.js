"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => {
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
