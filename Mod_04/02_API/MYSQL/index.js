const express = require("express");
const bodyParser = require("body-parser");

// Initializa express
const app = express();

// parse request of content-type - application/json
app.use(bodyParser.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to the API rest with MySQL" });
});

// invoke the function of the route
require("./routes/routes")(app);

//start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
