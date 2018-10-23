const express = require("express");
const bodyParser = require("body-parser");


//MIDDLEWARE
const { logger } = require("./middleware.js");

const uuid = require("uuid");

const app = express();

app.use(express.json()); //this is to convert the JSON object in to a javaScript Object
app.use(logger);

app.use("/api/candies", require("./routes/candies"))
// app.use("/api/snacks", require("./routes/snacks"))

app.use(errorHandler);

app.listen(8000, () => {
  console.log(`Successfully running on port 8000`);
});
