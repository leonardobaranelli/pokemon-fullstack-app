const typesRouter =  require("express").Router();

const { getTypes } = require("../../handlers/getTypesFromDB");

typesRouter.get("/", getTypes);

module.exports = typesRouter;
