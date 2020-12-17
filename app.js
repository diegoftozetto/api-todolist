////////////////////////////////////////////////////////////
// Carregando Módulos                                     //
////////////////////////////////////////////////////////////

//Dependências
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require('cors');

//Rotas
const task = require("./routes/task");

//app
const app = express();

//Config. Database
const db = require("./config/db");

////////////////////////////////////////////////////////////
// Configurações                                          //
////////////////////////////////////////////////////////////
//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, db.options).then(() => {
    console.log("Conectado ao mongoDB...");
}).catch((error) => {
    console.log("Erro ao conectar com o mongoDB: " + error);
});

//Body Parse
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.use(cors());

////////////////////////////////////////////////////////////
// Rotas                                                  //
////////////////////////////////////////////////////////////
app.use("/tasks", task);

////////////////////////////////////////////////////////////
// Outros                                                 //
////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor Rodando...");
});