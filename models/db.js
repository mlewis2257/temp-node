const mongoose = require("mongoose");
const { options } = require("../user");
mongoose.connect("mongodb://localhost/studentdb");

require("./student");
