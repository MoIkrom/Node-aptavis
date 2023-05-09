/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const { getAllData, createData } = require("../controllers/c_klasmen");

const Router = express.Router();

Router.get("/", getAllData);
Router.post("/", createData);

module.exports = Router;
