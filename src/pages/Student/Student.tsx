import { Container, Typography } from "@mui/material";
import AnimatedPage from "../../components/AnimatePage";
import { useState } from 'react'
import { TabPanel, TabContext } from "@mui/lab";
import { Tab, Tabs } from "@mui/material"
import TaskManager from "./TaskManager/TaskManager";
import Curriculum from "./Curriculum/Curriculum";

const Student = () => {
  const [page, setPage] = useState("task_manager")

  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  return (
    <>
      <AnimatedPage>
        <TabContext value={page}>
          <Container className="mt-20 mb-20">
            <Typography variant="h6">Student</Typography>
            <Tabs
                value={page}
                onChange={(e:React.SyntheticEvent ,newValue: string) => setPage(newValue)}
                textColor="primary"
                variant="scrollable"
                className="mb-4"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "red",
                  },
                }}
              >
                <Tab label="Task Manager" value="task_manager" className="text-[0.8rem]" />
                <Tab label="Curriculum" value="curriculum" className="text-[0.8rem]" />
              </Tabs>
              <TabPanel value="task_manager" className="p-0">
                <TaskManager />
              </TabPanel>
              <TabPanel value="curriculum" className="p-0">
                <Curriculum />
              </TabPanel>
          </Container>
        </TabContext>
      </AnimatedPage>
    </>
  );
};

export default Student;
