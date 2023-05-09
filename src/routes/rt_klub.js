/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const { getAllClub, createClub } = require("../controllers/c_klub");

const Router = express.Router();

Router.get("/", getAllClub);
Router.post("/", createClub);

module.exports = Router;
