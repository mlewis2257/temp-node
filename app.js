const express = require("express");
const app = express();
const port = 3000;

const movies = [
  {
    id: 1,
    title: "Inception",
    actor: "Leonardo Dicaprio",
    release_year: "2010",
  },
  { id: 2, title: "Friday", actor: "Ice Cude", release_year: "1995" },
  { id: 3, title: "John Wick", actor: "Keanu Reeves", release_year: "2014" },
  {
    id: 4,
    title: "Mission_Impossible",
    actor: "Tom Cruise",
    release_year: "1999",
  },
];

// Get the movie in JSON format
app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const movie = movies.filter((movie) => movie.id === parseInt(req.params.id));
  if (!movie) {
    res.sendStatus(404);
  }

  res.json(movie);
});

app.get("/movies/title/:title", (req, res) => {
  const titleParams = req.params.title.toLocaleLowerCase();
  const movieTitle = movies.includes(titleParams);
  if (!movieTitle) {
    res.sendStatus(404);
  }
  res.json(movieTitle);
});

app.listen(port, (req, res) => {
  console.log(`Listening at port: ${port}`);
});

exports.module = app;
