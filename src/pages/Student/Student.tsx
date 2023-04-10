import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import AnimatedPage from "../../components/AnimatePage";
import TabNav from "../../components/Navigation/TabNav";
import TaskManager from "./TaskManager/TaskManager";
import Curriculum from "./Curriculum/Curriculum";
import appRoutes from "../../routes/routes";
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
      <Header />
      <AnimatedPage>
        <Container className="mt-20 mb-20">
          <Typography variant="h6">Student</Typography>
          <TabNav tabs={tabs} />
        </Container>
      </AnimatedPage>
      <Navbar />
    </>
  );
};

export default Student;
