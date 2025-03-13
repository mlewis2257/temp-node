const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.1.0.0",
  user: "root",
  password: "secret",
  database: "my_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("MySQL Database connected ");
  }
});

const app = express();

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodesql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    } else {
      res.send("Database Created");
    }
  });
});

app.listen((port = 3000), (req, res) => {
  console.log(`Listening on port: ${port}`);
});
