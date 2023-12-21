const createTask = require("../../api/Task/createTask");

const router = require("express").Router();

// create a user
router.post("/tasks", createTask);

module.exports = router;
