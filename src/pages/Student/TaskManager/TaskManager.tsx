import {
  AddCircle,
  MoreVert,
  CalendarMonth,
  Flag,
  Inbox,
  DoubleArrow,
} from "@mui/icons-material";
import {
  Checkbox,
  Container,
  IconButton,
  Input,
  List,
  ListItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Backdrop, ClickAwayListener } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

export type Task = {
  title?: String;
  description?: String;
  date?: Date;
  flag: "inbox" | "msu" | String;
  completed: Boolean;
};

const TaskManager = () => {
  const [openAddTask, setOpenAddTask] = useState(false);
  const [openAddFlag, setOpenAddFlag] = useState(false);
  const [openAddDate, setOpenAddDate] = useState(false);
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [date, setDate] = useState();
  const [flag, setFlag] = useState();
  const [tasks, setTasks] = useState<Task[]>([]);

  const AddTask = () => {
    if (title == "") return;
    tasks.push({
      title: title,
      description: description,
      date: new Date(),
      flag: "inbox",
      completed: false,
    });
    setTitle("");
    setDescription("");
    setOpenAddTask(!open);
  };

  const handleClickAway = () => {
    if (title != null) {
      localStorage.setItem("title", title);
    }
    if (description != null) {
      localStorage.setItem("description", description);
    }
    if (date != null) {
      localStorage.setItem("date", date);
    }
    if (flag != null) {
      localStorage.setItem("flag", flag);
    }
    setOpenAddTask(false);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.splice(index));
  };

  useEffect(() => {
    setTitle(localStorage.getItem("title")?.toString());
    setDescription(localStorage.getItem("description")?.toString());
  }, []);

  return (
    <>
      <Paper className="bg-neutral-200 py-2">
        <Container className="flex items-center justify-between gap-3 mx-2">
          <Typography variant="h6" className="w-4/5">
            Inbox
          </Typography>
          <IconButton centerRipple onClick={() => setOpenAddTask(true)}>
            <AddCircle fontSize="large" className="" />
          </IconButton>
          <MoreVert />
        </Container>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <div className="flex justify-end w-full p-2">
                <div className="w-3/4 flex gap-4">
                  <div className="bg-red-600 w-2 rounded-sm"></div>
                  <div>
                    <p className="text-base leading-5 font-semibold">
                      {task.title}
                    </p>
                    <Typography className="text-xs mt-1">
                      {task.description}
                    </Typography>
                    {task.date == null ? null : (
                      <p className="text-[0.6rem] font-bold mt-2">
                        {task.date.getDate()}/{task.date.getMonth() + 1}/
                        {task.date.getFullYear()}
                      </p>
                    )}
                  </div>
                </div>
                <Box className="justify-between w-1/4 text-right">
                  <Checkbox onClick={() => removeTask(index)} />
                </Box>
              </div>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Add task popup */}
      {openAddTask ? (
        <Backdrop open className="z-10">
          <ClickAwayListener onClickAway={handleClickAway}>
            <Paper className="flex flex-col w-11/12 rounded-md place-self-center">
              <Container className="mt-2">
                <Typography className="mb-4" variant="h6">
                  Add Task
                </Typography>
                <Input
                  placeholder="Todo / Task"
                  fullWidth
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <Input
                  placeholder="Description"
                  fullWidth
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <div className="flex justify-between items-center">
                  <Box>
                    <IconButton>
                      <CalendarMonth
                        className="text-gray-800"
                        fontSize="small"
                      />
                    </IconButton>
                    <IconButton onClick={() => setOpenAddFlag(true)}>
                      <Flag className="text-gray-800" fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <Inbox className="text-gray-800" fontSize="small" />
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
