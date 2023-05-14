import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { curriculumStatementsRoute } from "../../../routes/curriculumStatementsRoute";
import StatementTabContent from "./StatementTabContent";
import Carousel from "react-material-ui-carousel";

const Statements = () => {
  const [tab, setTab] = useState("Timetable & Calendar");
  const [statement, setStatement] = useState("Timetable");

  return (
    <TabContext value={tab}>
      <div className="w-full bg-neutral-800 rounded-md shadow-lg">
        <TabPanel value="Timetable & Calendar" className="p-0">
          <Carousel animation="slide" swipe>
            {curriculumStatementsRoute[0].children
              ?.find((child) => child.id == statement)
              ?.images?.map((image) => (
                <div className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden">
                  <img
                    className="object-cover w-full"
                    src={image}
                    alt="news picture"
                  />
                </div>
              ))}
          </Carousel>
        </TabPanel>
        <TabPanel value="Statements & Results" className="p-0">
          <Carousel animation="slide" swipe>
            {curriculumStatementsRoute[1].children
              ?.find((child) => child.id == statement)
              ?.images?.map((image) => (
                <div className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden">
                  <img
                    className="object-cover w-full"
                    src={image}
                    alt="news picture"
                  />
                </div>
              ))}
          </Carousel>
        </TabPanel>

        <Tabs
          value={tab}
          onChange={(event: React.SyntheticEvent, newValue: string) => {
            setTab(newValue);
          }}
          textColor="primary"
          variant="scrollable"
          TabIndicatorProps={{
            style: { backgroundColor: "red" },
          }}
        >
          <Tab
            label="Timetable & Calendar"
            value="Timetable & Calendar"
            onClick={() => {
              setTab("Timetable & Calendar")
              setStatement("Timetable")
            }}
            className="text-neutral-50 text-[0.8rem]"
          />
          <Tab
            label="Statements"
            value="Statements & Results"
            onClick={() => {
              setTab("Statements & Results")
              setStatement("GEMS Statement")
            }}
            className="text-neutral-50 text-[0.8rem]"
          />
        </Tabs>

        <TabPanel value="Timetable & Calendar" className="p-0">
          <StatementTabContent
            statement={statement}
            statements={curriculumStatementsRoute[0].children!}
            setStatement={setStatement}
          />
        </TabPanel>
        <TabPanel value="Statements & Results" className="p-0">
          <StatementTabContent
            statement={statement}
            statements={curriculumStatementsRoute[1].children!}
            setStatement={setStatement}
          />
        </TabPanel>
      </div>
    </TabContext>
  );
};

export default Statements;
