"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// write a basic express server
const express = require('express'); // npm i express
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    console.log('>> request received: ', req.url);
    res.send('Hello World!');
});
app.listen(3000);
console.log('>> server started on port 3000');
