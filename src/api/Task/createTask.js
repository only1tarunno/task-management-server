const Task = require("../../models/Task");

const createTask = async (req, res) => {
  try {
    const task = req.body;
    const result = await Task.create(task);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = createTask;
