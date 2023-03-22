import { Backdrop, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import TaskManager from "../pages/Student/TaskManager/TaskManager";

interface IFeatureOverlayProps {
  title: String;
  components: any;
}

export const FeatureOverlay = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Paper className="w-11/12 shadow-xl">
        <Typography variant="h5">Task Manager</Typography>
        <Container>
            <TaskManager/>
        </Container>
      </Paper>
    </Backdrop>
  );
};
