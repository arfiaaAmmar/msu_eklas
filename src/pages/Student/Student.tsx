import { Container, Typography } from "@mui/material";
import AnimatedPage from "../../components/AnimatePage";
import TabNav from "../../components/Navigation/TabNav";
import TaskManager from "./TaskManager/TaskManager";
import Curriculum from "./Curriculum/Curriculum";
import { Header } from "../../components/Navigation/Header";
import Navbar from "../../components/Navigation/Navbar";

const Student = () => {
  const tabs = [
    {
      label: "Task Manager",
      path: "/student/taskmanager",
      content: <TaskManager />,
    },
    {
      label: "Curriculum",
      path: "/student/curriculum",
      content: <Curriculum />,
    },
  ];

  return (
    <>
      <AnimatedPage>
        <Container className="mt-4">
          <Typography variant="h6">Student</Typography>
          {/* <TabNav tabs={tabs} /> */}
        </Container>
      </AnimatedPage>
    </>
  );
};

export default Student;
