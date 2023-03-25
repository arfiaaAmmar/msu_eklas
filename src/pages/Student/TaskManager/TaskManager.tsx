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

type Props = {
  className?:string | null;
}

const TaskManager = ({className}:Props) => {
  const [openAddTask, setOpenAddTask] = useState(false);
  const [openAddFlag, setOpenAddFlag] = useState(false);
  const [openAddDate, setOpenAddDate] = useState(false);
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [date, setDate] = useState();
  const [flag, setFlag] = useState();
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasks2:Task[] = [
    {title: "Test1", description: "Desciprion testsrg", date: new Date(), flag: "msu", completed: false},
    {title: "Test1", description: "Desciprion testsrg", date: new Date(), flag: "msu", completed: false},
    {title: "Test1", description: "Desciprion testsrg", date: new Date(), flag: "msu", completed: false}
  ]

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
      <div className={`bg-neutral-100 py-2 rounded-lg ${className}`}>
        <div className="flex items-center justify-between gap-3 mx-2">
          <Typography variant="h6" className="w-4/5">
            All
          </Typography>
          <IconButton centerRipple onClick={() => setOpenAddTask(true)}>
            <AddCircle fontSize="large" className="text-neutral-700"/>
          </IconButton>
          <MoreVert />
        </div>
        <ul>
          {tasks2.map((task, index) => (
            <li key={index} className="mx-3 my-2">
              <div className="flex justify-end w-full p-2 bg-neutral-200 rounded-md">
                <div className="w-3/4 flex gap-2 ">
                  <div className="bg-red-600 w-1 rounded-sm"></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg leading-5 font-semibold">
                      {task.title}
                    </p>
                    <p className="text-xs">
                      {task.description}
                    </p>
                    <p className="bg-red-500 text-[0.6rem] p-1 rounded-lg">Assignment</p>
                  </div>
                </div>
                <div className="flex flex-col justify-end w-1/4 text-right">
                  <Checkbox onClick={() => removeTask(index)} />
                  {task.date == null ? null : (
                      <p className="text-[0.6rem] font-bold text-neutral-500 mt-2">
                        {task.date.getDate()}/{task.date.getMonth() + 1}/
                        {task.date.getFullYear()}
                      </p>
                    )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add task popup */}
      {openAddTask ? (
        <Backdrop open className="z-10">
          <ClickAwayListener onClickAway={handleClickAway}>
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
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <Input
                  placeholder="Description"
                  fullWidth
                  className="text-white"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <div className="flex justify-between items-center">
                  <Box>
                    <IconButton>
                      <CalendarMonth
                        className="text-white"
                        fontSize="small"
                      />
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
