const express = require('express');
const bodyParser = require('body-parser');

const conactRoute = require("./routes/contact.js");

// create express app
const app = express();


// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// custome route
app.use("/api", conactRoute);


// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Setup server port
const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});