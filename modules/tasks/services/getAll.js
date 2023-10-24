const taskModel = require("../model");

async function getAllTasks(req, res) {
  try {
    console.log(req.userAuth.userId);
    const allTasks = await taskModel.find({});
    res.status(200).json({
      code: 200,
      message: "tasks found",
      userId: req.userAuth.userId,
      allTasks: allTasks,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the tasks" });
  }
}

module.exports = getAllTasks;
