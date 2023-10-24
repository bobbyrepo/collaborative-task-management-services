const express = require("express");
const router = express.Router();

const getAllTasks = require("./services/getAll");
const saveTask = require("./services/save");
const removeTask = require("./services/remove");
const editTask = require("./services/edit");

router.get("/get-all", async (req, res) => {
  await getAllTasks(req, res);
});

router.post("/save", async (req, res) => {
  await saveTask(req, res);
});

router.delete("/remove", async (req, res) => {
  await removeTask(req, res);
});

router.put("/update", async (req, res) => {
  await editTask(req, res);
});

module.exports = router;
