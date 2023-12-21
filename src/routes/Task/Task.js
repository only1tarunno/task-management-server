const createTask = require("../../api/Task/createTask");
const getTasks = require("../../api/Task/getTasks");

const router = require("express").Router();

// get all task by email
router.get("/tasks/:email", getTasks);

// create a user
router.post("/tasks", createTask);

module.exports = router;
