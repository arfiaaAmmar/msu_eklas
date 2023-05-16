import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const MessageTabs = () => {
  const [tab, setTab] = useState("All");

  return (
    <TabContext value={tab}>
      <Tabs
        value={tab}
        onChange={(event: React.SyntheticEvent, newValue: string) => {
          setTab(newValue);
        }}
        textColor="primary"
        variant="scrollable"
        TabIndicatorProps={{
          style: { backgroundColor: "red"},
        }}
      >
        <Tab value="All" label="All" className="text-neutral-50 text-[0.8rem]" />
        <Tab value="Group" label="Group" className="text-neutral-50 text-[0.8rem]"/>
        <Tab value="Classes" label="Classes" className="text-neutral-50 text-[0.8rem]"/>
      </Tabs>
      <TabPanel value="All">All</TabPanel>
      <TabPanel value="Group">Groups</TabPanel>
      <TabPanel value="Classes">Classes</TabPanel>
    </TabContext>
  );
};

export default MessageTabs;
