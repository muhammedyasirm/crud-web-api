const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to parse application/json
app.use(bodyParser.json());

app.use(cors());


require("./app/routes/employee.routes")(app);

// var corsOptions = {
//   origin: "http://localhost:3000/"
// };

const db = require("./app/models/index");
// db.sequelize.sync();

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});