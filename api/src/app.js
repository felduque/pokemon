import express from "express"

import bodyParser from "body-parser"

import infoPokemon from "./Routes/pokemonInfo/pokeinfo.routes.js"
import morgan from "morgan";
const app  = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("dev"))


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE, PATCH"
    );
    next();
  });

app.use(infoPokemon)



export default app 