const Task = require("../../models/Task");

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Task.deleteOne({ _id: id });
    res.send(result);
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = deleteTask;
