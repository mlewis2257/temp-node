const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use("/api/users", require("./user"));

app.use("/:id", (req, res) => {
  console.log(req.params.id);
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  const host = server.address().address;

  console.log(`Listening at port: ${port} address: ${host}`);
});

module.exports = app;
