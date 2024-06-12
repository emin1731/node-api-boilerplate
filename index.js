import * as http from "http";
import express from "express";

const app = express();
const port = 8000;

app.get("/hello", (req, res) => {
  res.send("Hello world ");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
//
// const host = "127.0.0.1";
//
// const server = http.createServer((req, res) => {
//   req.url;
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello world");
//   // res.writeHead(200);
//   // res.end("hello world\n");
// });
//
// server.listen(port, host, () => {
//   console.log(`Server is running on ${host}:${port}`);
// });
