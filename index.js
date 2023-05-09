require("dotenv").config();

//  Import Requirments
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//  Declare Variable
const app = express();
const port = 3001;

// Call Main Router on Routes Folder
const routerNavigation = require("./src/routes");

// called Requirements
app.use(cors());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.urlencoded({ extended: false }));

// Use Main Routes that was Called
app.use(routerNavigation);

// If Router Error or Not Found then send this Message
app.use("/*", (request, response) => {
  response.status(404).send("Path Not Found");
});

// Listen Port on Console
app.listen(port, () => {
  console.log(`Server is Running on port:  ${port}`);
});
