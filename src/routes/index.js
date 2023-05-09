/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

//  Import Express
const express = require("express");

// Declare Variable & Call Express
const Router = express.Router();

// Declare Variable & Call Router
const klasmenRoutes = require("./rt_klasmen");
const ClubRoutes = require("./rt_klub");
const skorRoutes = require("./rt_skor");

// Declare Variable
const prefix = "/api/v1";

// Use router file as af callback
Router.use(`${prefix}/club`, ClubRoutes);
Router.use(`${prefix}/klasmen`, klasmenRoutes);
Router.use(`${prefix}/skor`, skorRoutes);

module.exports = Router;
