const taskModel = require("../model");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

async function removeTask(req, res) {
  try {
    const _id = new ObjectId(req.query.id);
    console.log(req.query.id);
    const task = await taskModel.findByIdAndDelete({ _id: _id });

    return res.status(200).send({
      code: 200,
      message: "task deleted",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the task" });
  }
}

module.exports = removeTask;
