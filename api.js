const express = require("express");
const app = express();
const port = 3000;

// parse Json using Express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
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

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.post("/movies", (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.send("Movie has been added to the list");
});

app.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => parseInt(m.id) === parseInt(req.params.id));
  movie ? res.json(movie) : res.sendStatus(404);
});

app.delete("/movies/:id", (req, res) => {
  const originalLength = movies.length;
  let filteredMovies = movies.filter(
    (m) => parseInt(m.id) !== parseInt(req.params.id)
  );
  if (filteredMovies.length === originalLength) {
    res.sendStatus(404);
  } else {
    movies = filteredMovies;
    res.json({ msg: "Deleted Selected Movie", movies: movies });
  }
});

app.listen(port, (req, res) => console.log(`Listening at port: ${port}`));
