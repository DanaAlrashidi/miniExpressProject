const express = require("express");
const { getAllUsers, createUser } = require("./controllers");

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
module.exports = router;
