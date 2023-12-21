const Task = require("../../models/Task");

const getSingleTask = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Task.findById(id);
    res.send(result);
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = getSingleTask;
