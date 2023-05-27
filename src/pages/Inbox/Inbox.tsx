import AnimatedPage from "../../components/AnimatePage";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import { Add, AddCircle } from "@mui/icons-material";
import MessageIcon from "@mui/icons-material/Message";
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react'

export type Message = {
  id:number,
  sender: string | "Library" | "Finance" | "Counselling" | "Admission",
  recipient: string,
  subject: string,
  time: Date,
  body: string,
  isRead: boolean,
};

export default function Inbox() {
  const [tab, setTab] = useState("Messages");
  const [messages, setMessages] = useState<Message[]>([]);

  const { data, isLoading, error } = useFetch<Message[]>(
    "http://localhost:3000/msumail"
  );

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0){
      setMessages(data)
    } 
  }, [data])

  if (isLoading) return <p>Loading ....</p>
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(data)) return <p>Data is not an array</p>;

  const truncateMessage = (message: string) => {
    return message.substring(0, 100) + "...";
  };

  const handleAddMessage = () => {};

  return (
    <AnimatedPage>
      <Container className="mt-20 mb-20">
        <TabContext value={tab}>
          <Tabs
            value={tab}
            onChange={(event: React.SyntheticEvent, newValue: string) => {
              setTab(newValue);
            }}
            textColor="primary"
            TabIndicatorProps={{
              style: { backgroundColor: "red" },
            }}
          >
            <Tab label="All" value="All" />
            <Tab label="Classes" value="Classes" />
            <Tab label="MSU Mail" value="MSU Mail" />
          </Tabs>
          {/* <TabPanel value="All" className="p-0 mt-4">
            {messages.map((message) => (
              <Box className="flex gap-2 bg-neutral-200 p-2 my-1 rounded-md items-center">
                <Box className="w-1/6">
                  <Avatar className="object-contain m-auto" />
                </Box>
                <Box className="w-full">
                  <Box className="flex items-center justify-between">
                    <Typography className="text-sm font-semibold">
                      {message.}
                    </Typography>
                    <Typography className="text-[0.6rem]">
                      {new Date(message.time).toLocaleDateString("en-GB")}
                    </Typography>
                  </Box>
                  <Typography className="text-xs">
                    {message.status == "sent" ? (
                      <span className="text-teal-500">/ </span>
                    ) : (
                      <span className="text-teal-500">// </span>
                    )}
                    <span className="text-teal-500 font-semibold"></span>
                    {truncateMessage(message.message)}
                  </Typography>
                </Box>
                <IconButton
                  centerRipple
                  className="bg-red-600 p-0 shadow-md absolute bottom-24 right-4"
                >
                  <Add className="text-5xl text-white" />
                </IconButton>
              </Box>
            ))}
          </TabPanel>
          <TabPanel value="Classes" className="p-0 mt-4">
            {msuMail.map((mail) => (
              <Box className="flex gap-2 bg-neutral-200 p-2 my-1 rounded-md items-center">
                <Box className="w-1/6">
                  <Avatar className="object-contain m-auto" />
                </Box>
                <Box className="w-full">
                  <Box className="flex items-center justify-between">
                    <Typography className="text-sm font-semibold">
                      {mail.department}
                    </Typography>
                    <Typography className="text-[0.6rem]">
                      {new Date(mail.time).toLocaleDateString("en-GB")}
                    </Typography>
                  </Box>
                  <Typography className="text-xs">
                    {mail.isRead == true ? (
                      <span className="text-teal-500">/ </span>
                    ) : (
                      <span className="text-teal-500">// </span>
                    )}
                    <span className="text-teal-500 font-semibold"></span>
                    {mail.body}
                  </Typography>
                </Box>
                <IconButton
                  centerRipple
                  className="absolute bottom-20 right-2"
                  onClick={handleAddMessage}
                >
                  <MessageIcon className="text-red-600 text-6xl" />
                </IconButton>
              </Box>
            ))}
          </TabPanel> */}
          <TabPanel value="MSU Mail" className="p-0 mt-4">
            {
              messages.map(message => (
                <Box className="flex gap-2 bg-neutral-200 p-2 my-1 rounded-md items-center">
                <Box className="w-1/6">
                  <Avatar className="object-contain m-auto" />
                </Box>
                <Box className="w-full">
                  <Box className="flex items-center justify-between">
                    <Typography className="text-sm font-semibold">
                      {message.sender}
                    </Typography>
                    <Typography className="text-[0.6rem]">
                      {new Date(message.time).toLocaleDateString("en-GB")}
                    </Typography>
                  </Box>
                  <Typography className="text-xs">
                    {message.isRead == true ? (
                      <span className="text-teal-500">/ </span>
                    ) : (
                      <span className="text-teal-500">// </span>
                    )}
                    <span className="text-teal-500 font-semibold"></span>
                    {truncateMessage(message.body)}
                  </Typography>
                </Box>
                <IconButton
                  centerRipple
                  className="bg-red-600 p-0 shadow-md absolute bottom-24 right-4"
                >
                  <Add className="text-5xl text-white" />
                </IconButton>
              </Box>
              ))
            }
          </TabPanel>
        </TabContext>
      </Container>
    </AnimatedPage>
  );
}
