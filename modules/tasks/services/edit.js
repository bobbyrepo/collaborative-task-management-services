const taskModel = require("../model");

async function editTask(req, res) {
  const _id = req.query.id;
  const updatedTask = req.body;
  try {
    const task = await taskModel.findOne({ _id: _id });
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    const updatedTaskData = { ...task.toObject(), ...updatedTask };

    task.set(updatedTaskData);
    await task.save();

    return res.status(200).json({
      message: "Task updated successfully",
      task: task,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ code: 400, message: "error getting the user" });
  }
}

module.exports = editTask;
