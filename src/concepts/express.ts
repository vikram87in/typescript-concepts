import { Request, Response } from "express"; // npm i -D @types/express @types/node

// write a basic express server
const express = require('express'); // npm i express
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  console.log('>> request received: ', req.url);
  res.send('Hello World!');
});

app.listen(3000);
console.log('>> server started on port 3000');