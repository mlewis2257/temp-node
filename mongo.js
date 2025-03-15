const express = require("express");
const path = require("path");
const handleBars = require("handlebars");
const expressphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`<h2>Welcome to our MongoDB Database</h2>
    <h3>Click here to gain access <b><a href="">HERE</a></b></h3>`);
});

app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "phbs",
  expressphbs({
    handleBars: allowInsecurePrototypeAccess(handleBars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname + "views/layouts/",
  })
);

app.set("view engine", "hbs");
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
