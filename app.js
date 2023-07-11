const express = require("express");
const bodyParser = require("body-parser");
const Connection = require("./connection");

// database connection
const mongoose = require("mongoose");
const db = mongoose.connection;

Connection();
const PORT = 8000;

const app = express();
app.listen(PORT, () => {
  console.log("Server running on port 8000");
});
app.get("/", (req, res) => {
  res.set({
    "Access-control-Allow-Origin": "*",
  });
  return res.redirect("/signup.html");
});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/sign_up", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;

  var data = {
    name: name,
    email: email,
    password: pass,
    phone: phone,
  };
  db.collection("details").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  res.sendFile(__dirname + "/signup_success.html");
});

app.get("/signup.html", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
