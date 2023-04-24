import {
  AddCircle,
  MoreVert,
  CalendarMonth,
  Flag,
  Inbox,
  DoubleArrow,
} from "@mui/icons-material";
import {
  Container,
  IconButton,
  Input,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Backdrop, ClickAwayListener } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Task from "./Task";

export type Task = {
  id: number;
  title: string;
  description?: string;
  date?: Date;
  flag?: "inbox" | "msu" | "personal" | string;
  completed: Boolean;
};

const TaskManager = () => {
  const [openAddTask, setOpenAddTask] = useState(false);
  const [openAddFlag, setOpenAddFlag] = useState(false);
  const [openAddDate, setOpenAddDate] = useState(false);
  const [task, setTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    date: undefined,
    completed: false,
    flag: "inbox",
  });

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 0,
      title: "Task 1",
      description: "This is an easy task to do",
      date: new Date(),
      completed: false,
      flag: "inbox",
    },
    {
      id: 1,
      title: "Task 2",
      description:
        "This is an easy task to do like my mum said... I don't know if it's true though akfnkajefnkaj nakjwndkajnksjrg kjsrgnk jsbrgkj nkhjtn kjrfn ksjbskgrbk gsjrgk sjrngkjs nkjsbksjgnksj ",
      date: new Date(),
      completed: false,
      flag: "personal",
    },
  ]);

  const AddTask = () => {
    if (task?.title == "") return;
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task?.title,
        description: task?.description,
        date: new Date(),
        flag: "inbox",
        completed: false,
      },
    ]);

    setTask({
      id: 0,
      title: "",
      description: "",
      date: undefined,
      completed: false,
    });
    setOpenAddTask(!open);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="bg-neutral-100 py-2 rounded-lg">
        <div className="flex items-center justify-between gap-3 mx-2">
          <Typography variant="h6" className="w-4/5">
            All
          </Typography>
          <IconButton centerRipple onClick={() => setOpenAddTask(true)}>
            <AddCircle fontSize="large" className="text-neutral-700" />
          </IconButton>
          <MoreVert />
        </div>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task?.description}
              date={task.date}
              flag={task.flag}
              onDelete={() => removeTask(task.id)}
            />
          ))}
        </ul>
      </div>

      {/* Add task popup */}
      {openAddTask ? (
        <Backdrop open className="z-10">
          <ClickAwayListener onClickAway={() => setOpenAddTask(false)}>
            <Paper className="bg-neutral-800 text-white bg-flex flex-col w-11/12 rounded-md place-self-center">
              <Container className="mt-2">
                <Typography className="mb-4 text-white" variant="h6">
                  Add Task
                </Typography>
                <Input
                  placeholder="Todo / Task"
                  className="text-white"
                  fullWidth
                  name="title"
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  value={task.title}
                />
                <Input
                  placeholder="Description"
                  fullWidth
                  className="text-white"
                  name="description"
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                  value={task?.description}
                />
                <div className="flex justify-between items-center">
                  <Box>
                    <IconButton>
                      <CalendarMonth className="text-white" fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => setOpenAddFlag(true)}>
                      <Flag className="text-white" fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <Inbox className="text-white" fontSize="small" />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton onClick={AddTask}>
                      <DoubleArrow className="text-red-600" fontSize="large" />
                    </IconButton>
                  </Box>
                </div>
              </Container>
            </Paper>
          </ClickAwayListener>
        </Backdrop>
      ) : null}

      {/* Flags popup */}
      {openAddFlag ? (
        <Paper sx={{ width: 230 }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <Flag fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">MSU</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Flag fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">MSU Assignments</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Flag fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Personal
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      ) : null}
    </>
  );
};

export default TaskManager;
