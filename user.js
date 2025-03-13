const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("./routes/api/Users");

// get all users
router.get("/", (req, res) => {
  res.json(users);
});

// get a single user
router.get("/:id", (req, res) => {
  const foundUser = users.find((user) => user.id === parseInt(req.params.id));
  foundUser ? res.json(foundUser) : res.sendStatus(404);
});

// Create a user
router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  if (!newUser.name || !newUser.email || !newUser.age) {
    res.sendStatus(404);
  } else {
    users.push(newUser);
    res.json(users);
  }
});

// Update a user
router.put("/:id", (req, res) => {
  const foundUser = users.find((user) => user.id === parseInt(req.params.id));
  try {
    if (foundUser) {
      const updateUser = req.body;
      users.forEach((user) => {
        if (user.id === parseInt(req.params.id)) {
          user.name = updateUser.name ? updateUser.name : user.name;
          user.email = updateUser.email ? updateUser.email : user.email;
          user.age = updateUser.age ? updateUser.age : user.age;
        }
      });
      return res.json({ msg: "Updated User", user: foundUser });
    }
    res.sendStatus(404);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.delete("/:id", (req, res) => {
  const foundUser = users.find((user) => user.id === parseInt(req.params.id));
  if (foundUser) {
    users = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json({ msg: "User Deleted", user: foundUser });
  }
  res.sendStatus(404);
});

module.exports = router;
