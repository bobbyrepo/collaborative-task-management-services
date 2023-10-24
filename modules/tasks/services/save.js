const taskModel = require("../model");
const { v4: uuid } = require("uuid");

async function saveTask(req, res) {
  try {
    const newTask = new taskModel(req.body);
    const insertedTask = await newTask.save();
    return res
      .status(201)
      .json({ code: 200, message: "task added", task: newTask });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error adding the task" });
  }
}

module.exports = saveTask;
