require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const app = express();

const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const tasksRoute = require("./modules/tasks/router");
const usersRoute = require("./modules/users/router");
require("./database").connect();

app.use("/api/tasks", authenticateToken, tasksRoute);
app.use("/api/users", usersRoute);

app.get("/api", (req, res) => {
  res.send("Api Working!");
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userAuth) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.userAuth = userAuth;
    next();
  });
}

const PORT = process.env.PORT || 8000;

var server = app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});

io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (socket) {
  console.log("Socket connected:", socket.id);
  io.emit("firstEvent", "first event");

  socket.on("disconnect", function () {
    console.log("Socket disconnected:", socket.id);
  });

  socket.on("send-notification", function (data) {
    console.log("Received notification:", data);
    socket.broadcast.emit("new-notification", data);
  });
});
