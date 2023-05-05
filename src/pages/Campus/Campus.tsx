import AnimatePage from "../../components/AnimatePage";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Library from "./Library";
import AccountDepartment from "./AccounDepartment";
import Booking from "./Booking/Booking";
import { useState } from "react";
import { TabPanel, TabContext } from "@mui/lab";

const Campus = () => {
  const [page, setPage] = useState("account");
  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  return (
    <>
      <AnimatePage>
        <TabContext value={page}>
          <Container sx={{ width: "100%" }}>
            <Typography variant="h6">Campus</Typography>
            <Tabs
              value={page}
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
              <Tab label="Account" value="account" className="text-[0.8rem]" />
              <Tab label="Library" value="library" className="text-[0.8rem]" />
              <Tab label="Booking" value="booking" className="text-[0.8rem]" />
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
