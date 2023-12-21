const createTask = require("../../api/Task/createTask");
const getTasks = require("../../api/Task/getTasks");
const updateTask = require("../../api/Task/updateTask");

const router = require("express").Router();

// get all task by email
router.get("/tasks/:email", getTasks);

// create a user
router.post("/tasks", createTask);

// update
router.patch("/tasks/:id", updateTask);

module.exports = router;
