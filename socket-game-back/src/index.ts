import express from "express";

const app = express();

app.use((req, res) => {
  return res.status(200).send(`<h1> Hello world from node with TS! </h1>`);
});

app.listen(3000);
