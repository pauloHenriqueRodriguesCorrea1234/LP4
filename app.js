const express = require("express");
const mongoose = require("mongoose");

const port = ENV.apiPort;
const baseURL = ENV.baseURL;

const api = express();

mongoose.connect(baseURL);

mongoose.connection.on("error", (error) => {
  console.log("[ERROR]: conexão co DB" + error);
});

mongoose.connection.on("desconected", () => {
  console.log("[AVISO]: aplicação desconectada com DB");
});

mongoose.connection.on("error", () => {
  console.log("[AVISO]: aplicação conectada com DB" + error);
});

api.listen(port, () => {
  console.log(`Servidor rodadando na porta ${port}`);
});
