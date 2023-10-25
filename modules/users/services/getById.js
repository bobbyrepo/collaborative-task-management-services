const userModel = require("../model");

async function getById(req, res) {
  try {
    const user = await userModel.findOne({ userId: req.query.userId });

    return res
      .status(200)
      .send({ code: 200, message: "users find", data: user });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the user" });
  }
}

module.exports = getById;
