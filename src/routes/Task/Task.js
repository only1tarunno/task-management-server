const createTask = require("../../api/Task/createTask");
const deleteTask = require("../../api/Task/deleteTask");
const getSingleTask = require("../../api/Task/getSingleTask");
const getTasks = require("../../api/Task/getTasks");
const updateTask = require("../../api/Task/updateTask");

const router = require("express").Router();

// get all task by email
router.get("/tasks/:email", getTasks);
// single task
router.get("/tasks/singleTask/:id", getSingleTask);

// create a user
router.post("/tasks", createTask);

// update
router.patch("/tasks/:id", updateTask);

// delete
router.delete("/tasks/:id", deleteTask);

module.exports = router;
