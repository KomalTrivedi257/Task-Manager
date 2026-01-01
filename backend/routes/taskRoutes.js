const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// 🔐 Protect all routes
router.use(protect);

// 📌 Task CRUD routes
router.get("/", getTasks);          // GET  /tasks
router.post("/", createTask);       // POST /tasks
router.put("/:id", updateTask);     // PUT  /tasks/:id
router.delete("/:id", deleteTask);  // DELETE /tasks/:id

module.exports = router;
