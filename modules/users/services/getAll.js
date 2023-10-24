const userModel = require("../model");

async function getAllUser(req, res) {
  try {
    const users = await userModel.find({});
    return res
      .status(200)
      .send({ code: 200, message: "users find", data: users });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the user" });
  }
}

module.exports = getAllUser;
