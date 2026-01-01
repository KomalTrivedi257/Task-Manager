// import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// const TaskCard = ({ task, onDelete, onEdit }) => {
//   return (
//     <Card sx={{ mb: 2 }}>
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Box>
//             <Typography variant="h6">{task.title}</Typography>
//             <Typography variant="body2">{task.description}</Typography>
//           </Box>
//           <Box>
//             <IconButton color="primary" onClick={() => onEdit(task)}>
//               <EditIcon />
//             </IconButton>
//             <IconButton color="error" onClick={() => onDelete(task._id)}>
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default TaskCard;




import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <Card
      sx={{
        height: "100%",
        background: "rgba(255,255,255,0.22)",
        backdropFilter: "blur(12px)",
        borderRadius: 3,
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={2}
        >
          {/* TEXT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "#073763",
                mb: 0.5,
                wordBreak: "break-word",
              }}
            >
              {task.title}
            </Typography>

            {task.description && (
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#355c7d",
                  lineHeight: 1.5,
                  wordBreak: "break-word",
                }}
              >
                {task.description}
              </Typography>
            )}
          </Box>

          {/* ACTIONS */}
          <Box>
            <IconButton
              size="small"
              onClick={() => onEdit(task)}
              sx={{
                color: "#1976d2",
                "&:hover": {
                  background: "rgba(25,118,210,0.12)",
                },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              onClick={() => onDelete(task._id)}
              sx={{
                color: "#d32f2f",
                "&:hover": {
                  background: "rgba(211,47,47,0.12)",
                },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
