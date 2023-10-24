require("dotenv").config();
const userModel = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  const user = await userModel.findOne({ email: req.body.email });
  console.log(user);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const userId = user.userId;
      const userAuth = { userId };
      const accessToken = jwt.sign(userAuth, process.env.ACCESS_TOKEN_SECRET);

      res.send({
        message: "login sucess",
        accessToken: accessToken,
        data: user,
      });
    } else {
      res.status(401).send({ message: "wrong credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({ code: 400, message: "login failed" });
  }
}

module.exports = loginUser;
