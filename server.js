const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Define the route for serving the HTML registration form
app.get("/", (req, res) => {
  const htmlFilePath = path.join(__dirname, "index.html");
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");
  res.send(htmlContent);
});

// Define the route for handling form submission
app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const education = req.body.education;
  const experience = req.body.experience;
  const skills = req.body.skills;
  const additionalInfo = req.body.additionalInfo;

  // You can do further processing here, like saving the data to a database

  res.send("Registration successful!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
