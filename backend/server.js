const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD new task
app.post("/tasks", (req, res) => {
  tasks.push(req.body.task);
  res.json(tasks);
});

// UPDATE task (EDIT)
app.put("/tasks/:id", (req, res) => {
  const index = req.params.id;
  tasks[index] = req.body.task;
  res.json(tasks);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const index = req.params.id;
  tasks.splice(index, 1);
  res.json(tasks);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});