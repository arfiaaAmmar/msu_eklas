import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import AnimatedPage from "../../components/AnimatePage";
import TabNav from "../../components/Navigation/TabNav";
import TaskManager from "./TaskManager/TaskManager";
import Curriculum from "./Curriculum/Curriculum";

const Student = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AnimatedPage>
      <Container className="mt-20 mb-20">
        <Typography variant="h6">Student</Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#D91C15"
                }
              }}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TaskManager />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Curriculum />
          </TabPanel>
        </Box>
      </Container>
    </AnimatedPage>
  );
};

export default Student;


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}