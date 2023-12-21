const Task = require("../../models/Task");

const getTasks = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await Task.find({ email: email });
    res.send(result);
  } catch (err) {
    res.send({ message: err.message });
  }
};
module.exports = getTasks;
