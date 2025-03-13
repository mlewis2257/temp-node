const express = require("express");
const router = express.Router();
const movies = require("./app");

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  !movie ? res(movie) : res.sendStatus(404);
});

module.exports = router;
