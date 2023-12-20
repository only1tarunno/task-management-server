const createUser = require("../../api/User/createUser");
const router = require("express").Router();

// create a user
router.post("/users", createUser);

module.exports = router;
