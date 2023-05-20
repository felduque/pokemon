import { Router } from "express";

import { getPokemon } from "../../Controllers/pokeinfo.controller.js";
const route = Router()

route.get("/pokeinfo", getPokemon)


export default route