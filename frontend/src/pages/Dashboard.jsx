import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import API from "../services/api";
import TaskCard from "../components/TaskCard";

const inputStyle = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(8px)",
  borderRadius: 2,
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTask = async () => {
    if (!title) return;

    if (editId) {
      await API.put(`/tasks/${editId}`, { title, description });
      setEditId(null);
    } else {
      await API.post("/tasks", { title, description });
    }

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const editTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#98C6E8",
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: 600,
          color: "#073763",
        }}
      >
        Dashboard
      </Typography>

      {/* ADD / EDIT TASK */}
     <Paper
  sx={{
    maxWidth: 700,        // 👈 width kam
    mx: "auto",
    p: 4.5,              // 👈 height feel ke liye padding badhaya
    mb: 4,
    background: "rgba(255,255,255,0.28)",
    backdropFilter: "blur(14px)",
    borderRadius: 4,
  }}
>
  <Typography
    sx={{
      fontWeight: 600,
      mb: 2.5,
      color: "#073763",
      fontSize: "1.15rem",
    }}
  >
    {editId ? "Edit Task" : "Create New Task"}
  </Typography>

  {/* TASK TITLE */}
  <TextField
    fullWidth
    placeholder="Task title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    sx={{
      mb: 2.2,
      background: "rgba(255,255,255,0.18)",
      borderRadius: 2,
    }}
    InputProps={{
      style: {
        fontSize: "1rem",
        fontWeight: 500,
        color: "#073763",
      },
    }}
  />

  {/* DESCRIPTION */}
  <TextField
    fullWidth
    multiline
    rows={4}              // 👈 height badhai
    placeholder="Short description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    sx={{
      mb: 3,
      background: "rgba(255,255,255,0.18)",
      borderRadius: 2,
    }}
    InputProps={{
      style: { color: "#073763" },
    }}
  />

  {/* BUTTON */}
  <Button
    onClick={saveTask}
    sx={{
      px: 5,
      py: 1.4,
      fontWeight: 600,
      borderRadius: 3,
      background: "linear-gradient(90deg,#2196f3,#64b5f6)",
      color: "#fff",
      "&:hover": {
        background: "linear-gradient(90deg,#1976d2,#4dabf5)",
        transform: "translateY(-1px)",
      },
    }}
  >
    {editId ? "Save Changes" : "Add Task"}
  </Button>
</Paper>


      {/* SEARCH */}
      <Box sx={{ maxWidth: 600, mx: "auto", mb: 3 }}>
        <TextField
          fullWidth
          label="Search Tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={inputStyle}
          InputProps={{ style: { color: "#073763" } }}
          InputLabelProps={{ style: { color: "#073763" } }}
        />
      </Box>

    {/* TASK LIST */}
<Grid
  container
  spacing={3}
  justifyContent="center"   // 🔥 MAIN FIX
>
  {filteredTasks.map((task) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={task._id}
      sx={{
        display: "flex",
        justifyContent: "center", // 🔥 card center inside column
      }}
    >
      <TaskCard
        task={task}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </Grid>
  ))}
</Grid>

    </Box>
  );
};

export default Dashboard;

