const express = require("express");
const router = express.Router();

const getAllUser = require("./services/getAll");
const getById = require("./services/getById");
const loginUser = require("./services/login");
const registerUser = require("./services/register");

router.get("/", async (req, res) => {
  await getById(req, res);
});

router.get("/get-all", async (req, res) => {
  await getAllUser(req, res);
});

router.post("/login", async (req, res) => {
  await loginUser(req, res);
});

router.post("/register", async (req, res) => {
  await registerUser(req, res);
});

module.exports = router;
