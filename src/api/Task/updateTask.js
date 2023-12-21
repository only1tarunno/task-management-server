const Task = require("../../models/Task");

const updateTask = async (req, res) => {
  const id = req.params.id;
  const task = req.body;

  try {
    const filter = { _id: id };
    const updateDoc = {
      $set: {
        ...task,
      },
    };

    const result = await Task.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = updateTask;
