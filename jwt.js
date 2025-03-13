const express = require("express");
const jwt = require("jsonwebtoken");
const port = 8080;

const app = express();

const secretKey = "123456";

app.get("/api", (req, res) => {
  res.json({
    message: "Hey there welcome to our API Service",
  });
});
// All posts
app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.sendStatus(403); // Forbidden
    } else {
      res.json({
        message: "Post was created successfully!",
        authData,
      });
    }
  });
});
// logins in a new user
app.post("/api/login", (req, res) => {
  const user = {
    id: 10,
    username: "Francis Kessler",
    email: "fkessler@gmail.com",
  };

  jwt.sign({ user: user }, secretKey, (err, token) => {
    res.json({
      token,
    });
  });
});
// Server
app.listen(port, (req, res) => {
  console.log(`Listening on port: ${port}`);
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
