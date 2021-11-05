const express = require("express");
const bodyParser = require("body-parser");

// Initialize express
const app = express();

// parse request of content-type: application/json
app.use(bodyParser.json());

// parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API with MYSQL" });
});

// invoke the routes
require("./routes/routes")(app);

// start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
