import AnimatePage from "../../components/AnimatePage";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Library from "./Library/Library";
import AccountDepartment from "./AccounDepartment";
import Booking from "./Booking/Booking";
import { useState } from "react";
import { TabPanel, TabContext } from "@mui/lab";


const Campus = () => {
  const [tab, setTab] = useState("account");
  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <AnimatePage>
        <TabContext value={tab}>
          <Container className="mt-20 mb-20">
            <Typography variant="h6">Campus</Typography>
            <Tabs
              value={tab}
              onChange={handleTab}
              textColor="primary"
              variant="scrollable"
              className="mb-4"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "red",
                },
              }}
            >
              <Tab label="Account" value="account" />
              <Tab label="Library" value="library"  />
              <Tab label="Booking" value="booking" />
            </Tabs>
            <TabPanel value="account" className="p-0">
              <AccountDepartment />
            </TabPanel>
            <TabPanel value="library" className="p-0">
              <Library />
            </TabPanel>
            <TabPanel value="booking" className="p-0">
              <Booking />
            </TabPanel>
          </Container>
        </TabContext>
      </AnimatePage>
    </>
  );
};

export default Campus;
