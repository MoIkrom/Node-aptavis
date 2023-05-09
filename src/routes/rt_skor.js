/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const { getAllScore, createScore } = require("../controllers/c_skor");

const Router = express.Router();

Router.get("/", getAllScore);
Router.post("/", createScore);

module.exports = Router;
